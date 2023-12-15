<script lang="ts">
	import Analytics from '$lib/analytics.svelte';
	import '../app.css';
</script>

<!-- If a UI layout will be repeated between pages, add the reccuring UI here.  
This is to prevent code from repeating.
-->
<Analytics />

<!-- The UI from +page.svelte will be rendered in <slot />. -->
<slot />
