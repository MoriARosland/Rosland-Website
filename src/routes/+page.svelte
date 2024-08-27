<script lang="ts">
	import Tabs from '$lib/components/Tabs.svelte';
	import bioImageBike from '$lib/images/bike.jpg';
	import bioImageMountain from '$lib/images/mountains.jpg';
	import AnimateContent from '$lib/components/AnimateContent.svelte';
	import Links from '$lib/components/Links.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	import Projectcard from '$lib/components/Projectcard.svelte';

	export let data: PageData;

	let items = ['Projects', 'Bio'];
	let activeItem = 'Projects';

	let windowWidth = 0;

	onMount(() => {
		// Update windowWidth when the component is mounted
		windowWidth = window.innerWidth;

		// Add an event listener to update windowWidth on window resize
		window.addEventListener('resize', () => {
			windowWidth = window.innerWidth;
		});
	});

	function scrollToMain() {
		const object = document.getElementById('main');

		// Prevent null warning.
		if (!object) return;

		object.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}

	// Remember to check for valid firebase data.
	let projects = data.projects ?? [];
	let validData = false;

	if (projects.length != 0) {
		validData = true;
		// console.log(projects);
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-max">
			<h1 class="text-5xl font-bold">Hello there👋 I'm Mori</h1>
			<p class="py-4">
				I study Electronic System Design and Innovation at NTNU and am currently in my 4th year.
			</p>
			<Links />
			<button class="btn btn-ghost btn-outline normal-case mt-3" on:click={scrollToMain}
				>Take a look at some of my projects🛠</button
			>
		</div>
	</div>
</div>

<main class="relative min-h-screen" id="main">
	<Tabs bind:activeItem {items} />

	<AnimateContent {activeItem}>
		{#if activeItem == 'Projects'}
			<div class="relative min-h-screen">
				{#if validData}
					<div class="flex px-3 py-2 justify-center flex-wrap">
						{#each projects as project}
							<Projectcard {project} />
						{/each}
					</div>
				{:else}
					<p>There is no data to show.</p>
				{/if}
			</div>

			<h1 class="text-center text-2xl">More coming soon</h1>
		{:else if activeItem == 'Bio'}
			<div class="flex justify-center">
				<div class="flex flex-row justify-center" class:flex-wrap={windowWidth < 768}>
					<div class="w-full px-4 py-3" id="text">
						<h1 class="text-4xl font-bold pb-3">About me</h1>
						<h2 class="pb-1"><spand class="font-medium">Age:</spand> Continuously increasing.</h2>
						<h2 class="pb-1">
							<spand class="font-medium">Where I'm from:</spand> A place with plenty of fish and
							oil. Which part? The place where people call us "<span class="italic"
								>Nordlending</span
							>".
						</h2>
						<h2 class="pb-1">
							<spand class="font-medium">Education:</spand> Undergoing 5-year program at NTNU to understand
							how to create things from metal combined with green plastic (aka. PCBs).
						</h2>
						<p class="pt-2">
							<span class="font-medium">Bio:</span> Making things (mostly with code), reading stuff,
							learning stuff (e.g tech), and practicing sports are what interests me the most.
							<br />
							I also find great joy in meeting, getting to know and working with people.
						</p>
					</div>
					<div class="flex flex-col w-full px-4 py-3" id="images">
						<img class="object-scale-down max-w-xs mx-2" src={bioImageMountain} alt="placeholder" />
						<img
							class="object-scale-down max-w-xs mx-2 my-2"
							src={bioImageBike}
							alt="placeholder"
						/>
					</div>
				</div>
			</div>
		{/if}
	</AnimateContent>
</main>
