<script lang="ts">
	import { fly } from 'svelte/transition';

	export let activeItem: string;
</script>

{#key activeItem}
	<div in:fly={{ x: '-100%', duration: 500 }}>
		<slot />
	</div>
{/key}
