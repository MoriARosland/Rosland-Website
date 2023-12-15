<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_GOOGLE_ANALYTICS } from '$env/static/public';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', PUBLIC_GOOGLE_ANALYTICS, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-X9D6PNQ0JH">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', PUBLIC_GOOGLE_ANALYTICS);
	</script>
</svelte:head>
