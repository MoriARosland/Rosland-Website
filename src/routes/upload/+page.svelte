<script lang="ts">
	import { auth } from '$lib/firebase';
	import { error } from '@sveltejs/kit';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	$: admin = false;

	const user = userStore(auth);

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider);
		const userID = { googleID: user.user.uid };

		try {
			const response = await fetch('/api/verifyID', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userID)
			});

			const data = await response.json();
			const { isAdmin } = data;

			if (isAdmin === true) {
				admin = true;
			} else {
				admin = false;
				alert('You are not an admin. Sign-in denied.');
				signOut(auth);
			}
		} catch (err) {
			signOut(auth);
			admin = false;
			alert('Server error. Could not resolve API-request.');
		}
	}
</script>

{#if $user && admin === true}
	<p>User id: {$user?.uid}</p>
	<button class="btn btn-primary" on:click={() => signOut(auth)}>Sign out</button>
{:else}
	<div class="flex justify-center items-center min-h-screen">
		<div class="text-center">
			<h2 class="my-3">Login to view page.</h2>
			<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
		</div>
	</div>
{/if}
