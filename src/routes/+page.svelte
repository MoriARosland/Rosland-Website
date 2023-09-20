<script lang="ts">
	import Tabs from '$lib/components/Tabs.svelte';
	import cardImageCode from '$lib/images/code.png';
	import cardImageMerch from '$lib/images/merchDesign.jpg';
	import cardImageArcade from '$lib/images/elsysgame.jpg';
	import bioImageBike from '$lib/images/bike.jpg';
	import bioImageMountain from '$lib/images/mountains.jpg';
	import AnimateContent from '$lib/components/AnimateContent.svelte';
	import Links from '$lib/components/Links.svelte';

	function scrollToMain() {
		const object = document.getElementById('main');

		// Prevent null warning.
		if (!object) return;

		object.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}

	let items = ['Projects', 'Bio'];
	let activeItem = 'Bio';
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
			<div class="flex px-3 py-2 justify-center flex-wrap">
				<div class="card w-96 bg-neutral-200 shadow-xl m-3">
					<figure>
						<img src={cardImageCode} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-black">This Website😎</h2>
						<p class="text-black">
							I wanted to learn SvelteKit, and have a personal website. So I made this!
							<br /> It's built with SvelteKit, TailwindCSS and DaisyUi. <br />
							<spand class="italic"> (this card will be clickable with more info soon) </spand>
						</p>
					</div>
				</div>
				<div class="card w-96 bg-neutral-200 shadow-xl m-3">
					<figure>
						<img src={cardImageMerch} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-black">Student Union Merch</h2>
						<p class="text-black">
							At some point in 2022, I got an image in my head I thought would be funny on a
							sweater. So I decided to design (with some help), create, distribute, and sell it all
							by myself. <br />
							<spand class="italic"> (this card will be clickable with more info soon) </spand>
						</p>
					</div>
				</div>
				<div class="card w-96 bg-neutral-200 shadow-xl m-3">
					<figure>
						<img src={cardImageArcade} alt="placeholder" />
					</figure>
					<div class="card-body">
						<h2 class="card-title text-black">Arcade Game</h2>
						<p class="text-black">
							Built a gamestation with my student group as part of a university project. <br />
							<spand class="italic"> (this card will be clickable with more info soon) </spand>
						</p>
					</div>
				</div>
			</div>
			<h1 class="text-center text-2xl">More comming soon</h1>
		{:else if activeItem == 'Bio'}
			<div class="flex justify-center">
				<div class="flex flex-row justify-center">
					<div class="w-full px-4 py-3" id="text">
						<h1 class="text-4xl font-bold pb-3">About me</h1>
						<h2 class="pb-1"><spand class="font-medium">Age:</spand> Continuously increasing.</h2>
						<h2 class="pb-1">
							<spand class="font-medium">Where I'm from:</spand> A place with plenty of fish,
							"brunost" and oil. Which part? The place where people call us "<span class="italic"
								>Nordlending</span
							>".
						</h2>
						<h2 class="pb-1">
							<spand class="font-medium">Education:</spand> Undergoing 5-year program at NTNU to understand
							how to create cool stuff with metal combined with green plastic (aka. PCBs).
						</h2>
						<p class="pt-2">
							<span class="font-medium">Bio:</span> Making things (mostly with code), reading stuff,
							learning stuff (e.g tech), and practicing sports are what interests me the most.
							<br />
							A part of this is spending time with people; meeting new people, working with people, and
							getting to know people, all of which I find great joy in.
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
