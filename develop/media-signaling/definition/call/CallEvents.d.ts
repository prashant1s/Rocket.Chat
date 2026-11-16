import type { ClientState } from '../client.js';
import type { CallState } from './IClientMediaCall.js';
export type CallEvents = {
    stateChange: CallState;
    clientStateChange: ClientState;
    trackStateChange: void;
    contactUpdate: void;
    initialized: void;
    confirmed: void;
    accepting: void;
    accepted: void;
    active: void;
    hidden: void;
    ringing: void;
    ended: void;
    screenShareRequestChange: boolean;
    streamChange: void;
};
//# sourceMappingURL=CallEvents.d.ts.map