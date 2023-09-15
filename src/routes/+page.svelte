<script lang="ts">
	import Tabs from '$lib/components/Tabs.svelte';
	import card_image from '$lib/images/placeholder.jpg';
	import AnimateContent from '$lib/components/AnimateContent.svelte';

	let items = ['Projects', 'Bio'];
	let activeItem = 'Projects';

	function printStates() {
		console.log('Active item:', activeItem);
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-max">
			<h1 class="text-5xl font-bold">Hello there👋 I'm Mori</h1>
			<p class="py-6">
				I study Electronic System Design and Innovation at NTNU, and is currently in my 3rd year.
			</p>
			<button class="btn btn-ghost btn-outline normal-case"
				>Have a look at some of my projects🛠</button
			>
		</div>
	</div>
</div>

<main class="relative min-h-screen">
	<Tabs bind:activeItem {items} />

	<AnimateContent {activeItem}>
		{#if activeItem == 'Projects'}
			<div class="flex px-3 py-2 justify-center">
				<div class="card w-96 h-96 bg-slate-200 shadow-xl m-3">
					<figure>
						<img src={card_image} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-black">This Website!</h2>
						<p class="text-black">This is just some text to PLACEHOLD.</p>
					</div>
				</div>
				<div class="card w-96 h-96 bg-base-100 shadow-xl m-3">
					<figure>
						<img src={card_image} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Im a placeholder!</h2>
						<p>This is just some text to PLACEHOLD.</p>
					</div>
				</div>
			</div>
		{:else if activeItem == 'Bio'}
			<h1>This is my bio</h1>
			<p>Here is some text about me.</p>
		{/if}
	</AnimateContent>
</main>

<!-- <div class="relative min-h-screen bg-gray-800">
	<div class="min-w-screen flex justify-center">
		<div class="join pt-16">
			<button class="btn join-item btn-outline btn-info btn-sm" on:click={setContentToProjects}
				>Projects🛠</button
			>
			<button class="btn join-item btn-outline btn-info btn-sm" on:click={setContentToBio}
				>Bio💬</button
			>
		</div>
	</div>
</div> -->
