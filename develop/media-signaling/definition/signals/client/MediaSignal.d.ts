import { type JSONSchemaType } from 'ajv';
import { type ClientMediaSignalAnswer } from './answer.js';
import { type ClientMediaSignalDTMF } from './dtmf.js';
import { type ClientMediaSignalError } from './error.js';
import { type ClientMediaSignalHangup } from './hangup.js';
import { type ClientMediaSignalLocalSDP } from './local-sdp.js';
import { type ClientMediaSignalLocalState } from './local-state.js';
import { type ClientMediaSignalNegotiationNeeded } from './negotiation-needed.js';
import { type ClientMediaSignalRegister } from './register.js';
import { type ClientMediaSignalRequestCall } from './request-call.js';
import { type ClientMediaSignalTransfer } from './transfer.js';
export type ClientMediaSignal = ClientMediaSignalLocalSDP | ClientMediaSignalError | ClientMediaSignalAnswer | ClientMediaSignalHangup | ClientMediaSignalDTMF | ClientMediaSignalRequestCall | ClientMediaSignalLocalState | ClientMediaSignalRegister | ClientMediaSignalNegotiationNeeded | ClientMediaSignalTransfer;
export declare const clientMediaSignalSchema: JSONSchemaType<ClientMediaSignal>;
export declare const isClientMediaSignal: import("ajv").ValidateFunction<ClientMediaSignal>;
export type ClientMediaSignalType = ClientMediaSignal['type'];
type ExtractMediaSignal<T, K extends ClientMediaSignalType> = T extends {
    type: K;
} ? T : never;
export type GenericClientMediaSignal<K extends ClientMediaSignalType> = ExtractMediaSignal<ClientMediaSignal, K>;
export type ClientMediaSignalBody<K extends ClientMediaSignalType = ClientMediaSignalType> = Omit<GenericClientMediaSignal<K>, 'callId' | 'contractId' | 'type'>;
export {};
//# sourceMappingURL=MediaSignal.d.ts.map