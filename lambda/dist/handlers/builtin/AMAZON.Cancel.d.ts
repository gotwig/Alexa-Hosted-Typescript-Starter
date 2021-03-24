import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
export declare class BuiltinAmazonCancelHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Response;
}
