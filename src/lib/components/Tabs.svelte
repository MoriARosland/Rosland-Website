<script lang="ts">
	export let items: string[];
	export let activeItem: string;

	function changeTab(item: string) {
		activeItem = item;
	}
</script>

{#key activeItem}
	<div class="py-10 text-center">
		<ul class="flex justify-center p-0 join">
			{#each items as item}
				<li
					class="w-36 join-item"
					class:bg-blue-600={item === activeItem}
					class:bg-opacity-95={item === activeItem}
					class:bg-gray-700={item !== activeItem}
					class:hover:bg-blue-400={item !== activeItem}
					class:hover:text-slate-100={item !== activeItem}
					class:hover:transition={item !== activeItem}
					class:transition={item !== activeItem}
				>
					<button
						class="w-full h-full"
						on:click={() => changeTab(item)}
						class:text-white={item === activeItem}>{item}</button
					>
				</li>
			{/each}
		</ul>
	</div>
{/key}
