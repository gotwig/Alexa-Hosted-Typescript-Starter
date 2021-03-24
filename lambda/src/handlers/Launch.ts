import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
import * as Alexa from 'ask-sdk-core';
import  { stream } from "../assets/stream.json";

export class LaunchHandler implements RequestHandler {

    async handlePersistenceSession(handlerInput: HandlerInput): Promise<boolean> {
        let userIsNew = true;
        const userId = Alexa.getUserId(handlerInput.requestEnvelope);
        const {attributesManager} = handlerInput;
        
        // Retrieve parsistent attributes object
        const attributes = await attributesManager.getPersistentAttributes();
    
        // Set a value to the persistent attributes object
        if (!attributes.userIds) {
            attributes.userIds = [];
        }
        
        if (attributes.userIds.includes(userId)) {
            userIsNew = false;
        } else {
            attributes.userIds.push(userId);
        }
        
        console.log(attributes.userIds);
    
        attributesManager.setPersistentAttributes(attributes);
        
        // Store persistent attributes object
        await attributesManager.savePersistentAttributes();

        return userIsNew;
    }

    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    }

    async handle(handlerInput: HandlerInput): Promise<Response> {
        const userIsNew = await this.handlePersistenceSession(handlerInput);

        const speechText = userIsNew ? 'Hallo das ist die Erstbegrüßung' : 'Hallo das ist die Zweitbegrüßung'

        return handlerInput.responseBuilder
            .speak( speechText )
            .addAudioPlayerPlayDirective('REPLACE_ALL', stream.url, stream.token, 0, undefined, stream.metadata)
            .withShouldEndSession(true)
            .getResponse();
    }
}
