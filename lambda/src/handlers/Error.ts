import { ErrorHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export class CustomErrorHandler implements ErrorHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        return true;
    }

    handle(handlerInput: HandlerInput, error: Error): Response {
        const request = handlerInput.requestEnvelope.request;
        const speechText = 'ERROR_RESPONSE';
        const repromptSpeechText = 'ERROR_RESPONSE_BIS';

        console.log(`Error handled: ${error.message}`);
        console.log(`Original Request was: ${JSON.stringify(request, null, 2)}`);

        return handlerInput.responseBuilder.speak(speechText).reprompt(repromptSpeechText).getResponse();
    }
}
