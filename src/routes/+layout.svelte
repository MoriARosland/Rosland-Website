<script lang="ts">
	import AnimatedBody from '$lib/components/AnimatedBody.svelte';
	import { page } from '$app/stores';
	import '../app.css';
</script>

<!-- If a UI layout will be repeated between pages, add the reccuring UI here.  
This is to prevent code from repeating.
-->
<!-- The UI from +page.svelte will be rendered in <slot />. -->
<slot />
