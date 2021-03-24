"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchHandler = void 0;
const Alexa = __importStar(require("ask-sdk-core"));
const stream_json_1 = require("../assets/stream.json");
class LaunchHandler {
    handlePersistenceSession(handlerInput) {
        return __awaiter(this, void 0, void 0, function* () {
            let userIsNew = true;
            const userId = Alexa.getUserId(handlerInput.requestEnvelope);
            const { attributesManager } = handlerInput;
            // Retrieve parsistent attributes object
            const attributes = yield attributesManager.getPersistentAttributes();
            // Set a value to the persistent attributes object
            if (!attributes.userIds) {
                attributes.userIds = [];
            }
            if (attributes.userIds.includes(userId)) {
                userIsNew = false;
            }
            else {
                attributes.userIds.push(userId);
            }
            console.log(attributes.userIds);
            attributesManager.setPersistentAttributes(attributes);
            // Store persistent attributes object
            yield attributesManager.savePersistentAttributes();
            return userIsNew;
        });
    }
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    }
    handle(handlerInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIsNew = yield this.handlePersistenceSession(handlerInput);
            const speechText = userIsNew ? 'Hallo das ist die Erstbegrüßung' : 'Hallo das ist die Zweitbegrüßung';
            return handlerInput.responseBuilder
                .speak(speechText)
                .addAudioPlayerPlayDirective('REPLACE_ALL', stream_json_1.stream.url, stream_json_1.stream.token, 0, undefined, stream_json_1.stream.metadata)
                .withShouldEndSession(true)
                .getResponse();
        });
    }
}
exports.LaunchHandler = LaunchHandler;
//# sourceMappingURL=Launch.js.map