import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export class BuiltinAmazonHelpHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    }

    handle(handlerInput: HandlerInput): Response {
        const speechText = 'Vielen Dank dass du meinen Skill nutzt';

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
}
