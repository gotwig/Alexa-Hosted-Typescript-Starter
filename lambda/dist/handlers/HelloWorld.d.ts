import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
export declare class HelloWorldHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Response;
}
