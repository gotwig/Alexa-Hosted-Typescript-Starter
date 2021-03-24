import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';
export declare class LaunchHandler implements RequestHandler {
    handlePersistenceSession(handlerInput: HandlerInput): Promise<boolean>;
    canHandle(handlerInput: HandlerInput): boolean;
    handle(handlerInput: HandlerInput): Promise<Response>;
}
