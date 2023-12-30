<script lang="ts">
	import { auth } from '$lib/firebase';
	import { error } from '@sveltejs/kit';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	$: admin = false;

	let previewURL: string;
	let isFormValid = false;

	// Form inputs
	let title = '';
	let description = '';
	let modal_title = '';
	let modal_text = '';
	let card_image;

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

	async function confirmSubmit() {
		// To-do
	}

	async function uploadProject() {
		// To-Do
	}
</script>

<!-- {#if $user && admin === true}
	<p>User id: {$user?.uid}</p>
	<button class="btn btn-primary" on:click={() => signOut(auth)}>Sign out</button>

	<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
{:else}
	<div class="flex justify-center items-center min-h-screen">
		<div class="text-center">
			<h2 class="my-3">Login to view page.</h2>
			<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
		</div>
	</div>
{/if} -->

<div class="flex flex-col justify-center items-center min-h-screen">
	<form class="flex flex-col">
		<input
			type="text"
			placeholder="Project title"
			class="input input-bordered w-full max-w-xs my-1"
			bind:value={title}
		/>
		<input
			type="text"
			placeholder="Project description"
			class="input input-bordered w-full max-w-xs my-1"
			bind:value={description}
		/>
		<input
			type="text"
			placeholder="Modal title"
			class="input input-bordered w-full max-w-xs my-1"
			bind:value={modal_title}
		/>
		<input
			type="text"
			placeholder="Modal description"
			class="input input-bordered w-full max-w-xs my-1"
			bind:value={modal_text}
		/>

		{#if isFormValid}
			<button class="btn btn-success w-full max-w-xs my-1" on:click={uploadProject}
				>Upload Project
			</button>
		{:else}
			<button class="btn btn-disabled w-full max-w-xs my-1">Upload Project </button>
		{/if}
	</form>
</div>
