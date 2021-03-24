"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinAmazonHelpHandler = void 0;
class BuiltinAmazonHelpHandler {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    }
    handle(handlerInput) {
        const speechText = 'Vielen Dank dass du meinen Skill nutzt';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
}
exports.BuiltinAmazonHelpHandler = BuiltinAmazonHelpHandler;
//# sourceMappingURL=AMAZON.Help.js.map