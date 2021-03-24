import { ErrorHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
export declare class CustomErrorHandler implements ErrorHandler {
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput, error: Error): Response;
}
