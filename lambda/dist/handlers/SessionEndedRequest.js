"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEndedHandler = void 0;
class SessionEndedHandler {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    }
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
}
exports.SessionEndedHandler = SessionEndedHandler;
//# sourceMappingURL=SessionEndedRequest.js.map