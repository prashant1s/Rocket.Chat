import { Emitter } from '@rocket.chat/emitter';
import { MediaStreamWrapper } from './MediaStreamWrapper.js';
import type { IMediaSignalLogger } from '../../definition/index.js';
import type { IMediaStreamManager, MediaStreamManagerEvents } from '../../definition/media/IMediaStreamManager.js';
import type { MediaStreamIdentification } from '../../definition/media/MediaStreamIdentification.js';
export declare class MediaStreamManager implements IMediaStreamManager {
    protected readonly peer: RTCPeerConnection;
    protected readonly logger?: IMediaSignalLogger | undefined;
    readonly emitter: Emitter<MediaStreamManagerEvents>;
    readonly mainLocal: MediaStreamWrapper;
    readonly screenShareLocal: MediaStreamWrapper;
    readonly mainRemote: MediaStreamWrapper;
    readonly screenShareRemote: MediaStreamWrapper;
    constructor(peer: RTCPeerConnection, logger?: IMediaSignalLogger | undefined);
    stopRemoteStreams(): void;
    setRemoteIds(streams: MediaStreamIdentification[]): void;
    getLocalStreamIds(): MediaStreamIdentification[];
    addRemoteTrack(track: MediaStreamTrack, streams: readonly MediaStream[]): void;
    getStreams(): MediaStreamWrapper[];
    getLocalStreams(): MediaStreamWrapper[];
    getRemoteStreams(): MediaStreamWrapper[];
    getLocalStreamByTag(tag: string): MediaStreamWrapper | null;
    getRemoteStreamByTag(tag: string): MediaStreamWrapper | null;
    hasAllRequiredTracks(): boolean;
    private findStreamWrappersForRemoteTrack;
    private createStream;
    private getRemoteStreamById;
}
//# sourceMappingURL=MediaStreamManager.d.ts.map