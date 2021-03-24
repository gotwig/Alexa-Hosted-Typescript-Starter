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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Alexa = __importStar(require("ask-sdk-core"));
const ask_sdk_s3_persistence_adapter_1 = require("ask-sdk-s3-persistence-adapter");
const AMAZON_Cancel_1 = require("./handlers/builtin/AMAZON.Cancel");
const AMAZON_Help_1 = require("./handlers/builtin/AMAZON.Help");
const Launch_1 = require("./handlers/Launch");
const HelloWorld_1 = require("./handlers/HelloWorld");
const SessionEndedRequest_1 = require("./handlers/SessionEndedRequest");
const Error_1 = require("./handlers/Error");
// This function establishes the primary key of the database as the skill id (hence you get global persistence, not per user id)
function keyGenerator(requestEnvelope) {
    if (requestEnvelope
        && requestEnvelope.context
        && requestEnvelope.context.System
        && requestEnvelope.context.System.application
        && requestEnvelope.context.System.application.applicationId) {
        return requestEnvelope.context.System.application.applicationId;
    }
    throw 'Cannot retrieve app id from request envelope!';
}
function buildLambdaSkill() {
    const bucketName = process.env.S3_PERSISTENCE_BUCKET ? process.env.S3_PERSISTENCE_BUCKET : '';
    return Alexa.SkillBuilders.custom().withPersistenceAdapter(new ask_sdk_s3_persistence_adapter_1.S3PersistenceAdapter({ bucketName: bucketName,
        objectKeyGenerator: keyGenerator
    }))
        .addRequestHandlers(new Launch_1.LaunchHandler(), new HelloWorld_1.HelloWorldHandler(), new AMAZON_Cancel_1.BuiltinAmazonCancelHandler(), new AMAZON_Help_1.BuiltinAmazonHelpHandler(), new SessionEndedRequest_1.SessionEndedHandler())
        .addErrorHandlers(new Error_1.CustomErrorHandler())
        .lambda();
}
exports.handler = buildLambdaSkill();
//# sourceMappingURL=index.js.map