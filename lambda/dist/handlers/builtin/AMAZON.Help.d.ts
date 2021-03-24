import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
export declare class BuiltinAmazonHelpHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Response;
}
