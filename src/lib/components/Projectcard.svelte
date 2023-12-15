<script lang="ts">
	import type { Firebase_Project } from '$lib/types';

	export let project: Firebase_Project;

	let modalIsOpen = false;

	function openModal() {
		modalIsOpen = true;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
	class="card w-96 bg-neutral-200 shadow-xl m-3 hover:cursor-pointer hover:scale-105 transition duration-400"
	on:click={openModal}
>
	<figure>
		<img src={project.card_image} alt="placeholder_image" />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-black">{project.title}</h2>
		<p class="text-black" bind:innerHTML={project.description} contenteditable="false" />
	</div>
</div>

<dialog id="modal" class="modal" class:modal-open={modalIsOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">{project.modal_title}</h3>
		<p class="py-4" bind:innerHTML={project.modal_text} contenteditable="false" />
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" on:click={() => (modalIsOpen = false)}>Close</button>
			</form>
		</div>
	</div>
</dialog>
