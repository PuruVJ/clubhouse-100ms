<script>
	import {
		selectIsPeerAudioEnabled,
		selectLocalPeer,
		selectPeerAudioByID
	} from '@100mslive/hms-video-store';
	import { selectorHmsStore } from './hms';

	/** @type {import("@100mslive/hms-video-store").HMSPeer}*/
	export let peer;

	const level = selectorHmsStore(selectPeerAudioByID(peer.id));
	const audioEnabled = selectorHmsStore(selectIsPeerAudioEnabled(peer.id));
	const localPeer = selectorHmsStore(selectLocalPeer);
	const isModerator = $localPeer.roleName === 'moderator';
</script>

{@debug isModerator}

<section />
