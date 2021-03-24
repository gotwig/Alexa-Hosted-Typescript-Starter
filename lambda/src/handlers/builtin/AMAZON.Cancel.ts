import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export class BuiltinAmazonCancelHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && (
            request.intent.name === 'AMAZON.StopIntent'
            || request.intent.name === 'AMAZON.PauseIntent'
            || request.intent.name === 'AMAZON.CancelIntent'
            || request.intent.name === 'AMAZON.LoopOffIntent'
            || request.intent.name === 'AMAZON.ShuffleOffIntent'
          );
    }

    handle(handlerInput: HandlerInput): Response {
        const speechText = 'Tschüss und bis zum nächsten Mal';

        return handlerInput.responseBuilder
        .addAudioPlayerClearQueueDirective('CLEAR_ALL')
        .addAudioPlayerStopDirective()
        .speak(speechText)
        .getResponse();
    }
}
