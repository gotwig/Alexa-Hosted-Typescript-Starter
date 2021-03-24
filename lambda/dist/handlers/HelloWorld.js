"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldHandler = void 0;
class HelloWorldHandler {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
    }
    handle(handlerInput) {
        const speechText = 'HELLO_WORLD';
        const cardTitle = 'SIMPLE_CARD_TITLE';
        return handlerInput.responseBuilder.speak(speechText).withSimpleCard(cardTitle, speechText).getResponse();
    }
}
exports.HelloWorldHandler = HelloWorldHandler;
//# sourceMappingURL=HelloWorld.js.map