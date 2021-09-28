const endPoint = import.meta.env.VITE_TOKEN_ENDPOINT;
const room_id = import.meta.env.VITE_ROOM_ID;

export async function getToken(role: 'listener' | 'speaker' | 'moderator') {
	const response = await fetch(`${endPoint}/api/token`, {
		method: 'POST',
		body: JSON.stringify({
			user_id: '5fc62c5872909272bf9995e1', // User ID assigned by you (different from 100ms' assigned id)
			role: role, // listener , speaker , moderator
			room_id
		})
	});

	const { token } = await response.json();

	return token;
}
