import { Ajv } from 'ajv';
import { clientMediaSignalAnswerSchema } from './answer.js';
import { clientMediaSignalDTMFSchema } from './dtmf.js';
import { clientMediaSignalErrorSchema } from './error.js';
import { clientMediaSignalHangupSchema } from './hangup.js';
import { clientMediaSignalLocalSDPSchema } from './local-sdp.js';
import { clientMediaSignalLocalStateSchema } from './local-state.js';
import { clientMediaSignalNegotiationNeededSchema } from './negotiation-needed.js';
import { clientMediaSignalRegisterSchema } from './register.js';
import { clientMediaSignalRequestCallSchema } from './request-call.js';
import { clientMediaSignalTransferSchema } from './transfer.js';
const ajv = new Ajv({ discriminator: true });
export const clientMediaSignalSchema = {
    type: 'object',
    additionalProperties: true,
    discriminator: { propertyName: 'type' },
    required: ['type'],
    oneOf: [
        clientMediaSignalLocalSDPSchema,
        clientMediaSignalErrorSchema,
        clientMediaSignalAnswerSchema,
        clientMediaSignalHangupSchema,
        clientMediaSignalDTMFSchema,
        clientMediaSignalRequestCallSchema,
        clientMediaSignalLocalStateSchema,
        clientMediaSignalRegisterSchema,
        clientMediaSignalNegotiationNeededSchema,
        clientMediaSignalTransferSchema,
    ],
};
export const isClientMediaSignal = ajv.compile(clientMediaSignalSchema);
//# sourceMappingURL=MediaSignal.js.map