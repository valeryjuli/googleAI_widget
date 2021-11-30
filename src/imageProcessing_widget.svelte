<script>
	import ImageBrowser from "./images_gallery/images_gallery.svelte";
import ImageOutputPanel from "./image_result/image_output_panel.svelte";
</script>

<main>
	<h1 class="text-2xl font-bold dark:text-pink-500">HuggingFace Widget</h1>
	<div class="widget-container">
		<ImageBrowser />
		<ImageOutputPanel />
	</div>
</main>

<style>
	.widget-container {
		display: flex;
		flex-direction: row;
	}
</style>













<!-- <script>
	export let name
	let darkMode=true;
  </script>

<main class="m-4 container mx-auto text-center {darkMode ? 'dark':''}">
	<header class="dark:bg-gray-700 bg-pink-500 p-5 rounded-md text-white">
		<h1 class="text-2xl font-bold dark:text-pink-500">Hello {name}!</h1>
		<p>
		  Visit the
		  <a href="https://svelte.dev/tutorial" class="text-black hover:text-white dark:text-pink-500 dark:hover:text-white">Svelte tutorial</a>
		  to learn how to build Svelte apps.
		</p>
		<label for="dmCheck">
			<input id="dmCheck" type="checkbox" bind:checked={darkMode} />
			Dark Mode
		</label>
	</header>
</main> -->