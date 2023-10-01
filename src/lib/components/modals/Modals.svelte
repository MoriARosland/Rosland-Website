<script>
	export let webModalIsOpen = false;
	export let merchModalIsOpen = false;
	export let gameModalIsOpen = false;
</script>

<dialog id="modal" class="modal" class:modal-open={webModalIsOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">morirosland.com</h3>
		<p class="py-4">
			Along with learning SvelteKit, this project also taught me version control (git), hosting, and
			webdesign. <br /> <br /> You can view the Github repository
			<a class="underline" href="https://github.com/NamePending99/Rosland-Website" target="_blank"
				>here.</a
			>
		</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" on:click={() => (webModalIsOpen = false)}>Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="modal" class="modal" class:modal-open={merchModalIsOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Ohma Electra with it's pet, Bjørkelangen</h3>
		<p class="py-4">
			I wanted to learn the process of making a product - from beginning to the end. This entailed
			eg. problem solving, design, production, collaboration, logistics, payment and feedback.
		</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" on:click={() => (merchModalIsOpen = false)}>Close</button>
			</form>
		</div>
	</div>
</dialog>

<dialog id="modal" class="modal" class:modal-open={gameModalIsOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Game development</h3>
		<p class="py-4">
			This project gave me a kickstart in programming and software development in teams.
		</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" on:click={() => (gameModalIsOpen = false)}>Close</button>
			</form>
		</div>
	</div>
</dialog>
