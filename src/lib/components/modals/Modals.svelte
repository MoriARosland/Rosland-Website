<script>
	export let webModalIsOpen = false;
	export let merchModalIsOpen = false;
	export let gameModalIsOpen = false;
</script>

<dialog id="modal" class="modal" class:modal-open={webModalIsOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">morirosland.com</h3>
		<p class="py-4">
			You can view the Github repository <a
				class="underline"
				href="https://github.com/NamePending99/Rosland-Website"
				target="_blank">here.</a
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
		<h3 class="font-bold text-lg">
			More info comming soon. I was too lazy at the time of writing this to write more :]
		</h3>
		<p class="py-4">Click the button below to close.</p>
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
		<h3 class="font-bold text-lg">More info comming sooooon :]</h3>
		<p class="py-4">Click the button below to close.</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn" on:click={() => (gameModalIsOpen = false)}>Close</button>
			</form>
		</div>
	</div>
</dialog>
