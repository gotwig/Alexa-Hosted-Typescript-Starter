"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinAmazonCancelHandler = void 0;
class BuiltinAmazonCancelHandler {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && (request.intent.name === 'AMAZON.StopIntent'
            || request.intent.name === 'AMAZON.PauseIntent'
            || request.intent.name === 'AMAZON.CancelIntent'
            || request.intent.name === 'AMAZON.LoopOffIntent'
            || request.intent.name === 'AMAZON.ShuffleOffIntent');
    }
    handle(handlerInput) {
        const speechText = 'Tschüss und bis zum nächsten Mal';
        return handlerInput.responseBuilder
            .addAudioPlayerClearQueueDirective('CLEAR_ALL')
            .addAudioPlayerStopDirective()
            .speak(speechText)
            .getResponse();
    }
}
exports.BuiltinAmazonCancelHandler = BuiltinAmazonCancelHandler;
//# sourceMappingURL=AMAZON.Cancel.js.map