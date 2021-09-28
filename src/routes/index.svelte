<script>
	import { hmsActions, selectorHmsStore } from '$lib/hms';
	import Join from '$lib/Join.svelte';
	import Room from '$lib/Room.svelte';
	import { selectIsConnectedToRoom } from '@100mslive/hms-video-store';

	const isConnected = selectorHmsStore(selectIsConnectedToRoom);
</script>

<!-- Leave if window closed -->
<svelte:window on:unload={() => $isConnected && hmsActions.leave()} />

{#if $isConnected}
	<Room />
{:else}
	<Join />
{/if}
