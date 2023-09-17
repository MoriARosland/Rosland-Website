<script lang="ts">
	import Tabs from '$lib/components/Tabs.svelte';
	import cardImageCode from '$lib/images/code.png';
	import cardImageMerch from '$lib/images/merchDesign.jpg';
	import cardImageArcade from '$lib/images/elsysgame.jpg';
	import AnimateContent from '$lib/components/AnimateContent.svelte';
	import Links from '$lib/components/Links.svelte';

	function scrollToMain() {
		const object = document.getElementById('main');

		// Prevent null warning.
		if (!object) return;

		object.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}

	let items = ['Projects', 'Bio'];
	let activeItem = 'Projects';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-max">
			<h1 class="text-5xl font-bold">Hello there👋 I'm Mori</h1>
			<p class="py-4">
				I study Electronic System Design and Innovation at NTNU, and is currently in my 3rd year.
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
			<div class="flex px-3 py-2 justify-center">
				<div class="card w-96 h-96 bg-slate-200 shadow-xl m-3">
					<figure>
						<img src={cardImageCode} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-black">This Website😎</h2>
						<p class="text-black">
							I figured it would be nice to have a personal website, so i built this site.
							<br /> It's built with SvelteKit, TailwindCSS and DaisyUi.
						</p>
					</div>
				</div>
				<div class="card w-96 h-96 bg-base-100 shadow-xl m-3">
					<figure>
						<img src={cardImageMerch} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Custom merch for my student union</h2>
						<p>
							At some point, i got an image in my head i thought was funny. So i desided to design
							it on a sweater, create and distribute it all by my self.
						</p>
					</div>
				</div>
				<div class="flex px-3 py-2 justify-center">
					<div class="card w-96 h-96 bg-slate-200 shadow-xl m-3">
						<figure>
							<img class="mt-40" src={cardImageArcade} alt="placeholder" />
						</figure>
						<div class="card-body">
							<h2 class="card-title text-black">Arcade Game</h2>
							<p class="text-black">
								Built a gamestation with my student group as part of a university project.
							</p>
						</div>
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
