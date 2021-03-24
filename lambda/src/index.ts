import * as Alexa from 'ask-sdk-core';
import { PersistenceAdapter } from 'ask-sdk-core';
import { S3PersistenceAdapter } from 'ask-sdk-s3-persistence-adapter';

import { BuiltinAmazonCancelHandler } from './handlers/builtin/AMAZON.Cancel';
import { BuiltinAmazonHelpHandler } from './handlers/builtin/AMAZON.Help';
import { LaunchHandler } from './handlers/Launch';
import { HelloWorldHandler } from './handlers/HelloWorld';
import { SessionEndedHandler } from './handlers/SessionEndedRequest';

import { CustomErrorHandler } from './handlers/Error';
import { RequestEnvelope } from 'ask-sdk-model';

// This function establishes the primary key of the database as the skill id (hence you get global persistence, not per user id)
function keyGenerator(requestEnvelope: RequestEnvelope): string{
    if (requestEnvelope
        && requestEnvelope.context
        && requestEnvelope.context.System
        && requestEnvelope.context.System.application
        && requestEnvelope.context.System.application.applicationId) {
      return requestEnvelope.context.System.application.applicationId; 
    }
    throw 'Cannot retrieve app id from request envelope!';
}

function buildLambdaSkill(): any {
    const bucketName = process.env.S3_PERSISTENCE_BUCKET ? process.env.S3_PERSISTENCE_BUCKET : '';

    return Alexa.SkillBuilders.custom().withPersistenceAdapter(new S3PersistenceAdapter({ bucketName : bucketName,
                                                                                          objectKeyGenerator: keyGenerator
                                                                                        }))
        .addRequestHandlers(
            new LaunchHandler(),
            new HelloWorldHandler(),
            new BuiltinAmazonCancelHandler(),
            new BuiltinAmazonHelpHandler(),
            new SessionEndedHandler(),
        )
        .addErrorHandlers(new CustomErrorHandler())
        .lambda();
}

export const handler = buildLambdaSkill();
