<script>
	import { selectPeers } from '@100mslive/hms-video-store';
	import { selectorHmsStore, _hmsStore } from './hms';

	// const peers = selectorHmsStore(selectPeers);

	/** @type {import('@100mslive/hms-video-store').HMSPeer[]}*/
	let peers;
	const peersSubscriber = _hmsStore.subscribe((_peers) => {
		peers = _peers;
	}, selectPeers);

	$: console.log(peers);
</script>

{#each peers as peer}
	<!-- <Tile {peer} /> -->

	<audio />
{/each}
