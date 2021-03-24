import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export class HelloWorldHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
    }

    handle(handlerInput: HandlerInput): Response {
        const speechText = 'HELLO_WORLD';
        const cardTitle = 'SIMPLE_CARD_TITLE';

        return handlerInput.responseBuilder.speak(speechText).withSimpleCard(cardTitle, speechText).getResponse();
    }
}
