"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
class CustomErrorHandler {
    canHandle(handlerInput) {
        return true;
    }
    handle(handlerInput, error) {
        const request = handlerInput.requestEnvelope.request;
        const speechText = 'ERROR_RESPONSE';
        const repromptSpeechText = 'ERROR_RESPONSE_BIS';
        console.log(`Error handled: ${error.message}`);
        console.log(`Original Request was: ${JSON.stringify(request, null, 2)}`);
        return handlerInput.responseBuilder.speak(speechText).reprompt(repromptSpeechText).getResponse();
    }
}
exports.CustomErrorHandler = CustomErrorHandler;
//# sourceMappingURL=Error.js.map