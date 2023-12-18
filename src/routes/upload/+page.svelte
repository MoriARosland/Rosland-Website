<script lang="ts">
	import { auth } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider);
		console.log(user);
	}

	const user = userStore(auth);
</script>

{#if $user && $user.uid == '4NFoYv76eyTTPtptAD7rhcSnm4K2'}
	// Remove this IdleDeadline.
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
