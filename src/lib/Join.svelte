<script>
	import { hmsActions } from './hms';
	import { getToken } from './utils/get-token';

	let userName = '';
	let shouldJoinWithMutedVideo = false;

	$: console.log(shouldJoinWithMutedVideo);

	async function joinRoom() {
		/** @type {string} */
		const token = await getToken('speaker');

		hmsActions.join({
			userName,
			authToken: token,
			settings: { isVideoMuted: shouldJoinWithMutedVideo }
		});
	}
</script>

<label>
	Username

	<input type="text" bind:value={userName} />
</label>

<br />

<label>
	Mute audio

	<input type="checkbox" bind:checked={shouldJoinWithMutedVideo} />
</label>

<br />
<button on:click={joinRoom}>Join</button>
