<script>
	import ImageBrowser from "./images_gallery/images_gallery.svelte";
	import ImageOutputPanel from "./image_result/image_output_panel.svelte";
</script>

<main>
	<h1 class="widget-title">HuggingFace Widget</h1>
	<div class="widget-steps">
		<p>1. Drop an image on the White area or click to upload an image from a local file</p>
		<p>2. Select the feature to process the image</p>
		<p>3. Click on the <strong>Go!</strong> button and visualize the result and the tags</p>
	</div>
	<div class="widget-container">
		<ImageBrowser />
		<ImageOutputPanel />
	</div>
</main>

<style>
	.widget-steps {
		display: flex;
		flex-direction: column;
		font-size: 0.8em;
		padding: 0 10px 0 10px;
	}

	.widget-title {
		display: flex;
		justify-content: center;
	}

	.widget-container {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
		width: 100%;
	}

	main {
		height: 100%;
		width: 50%;
	}
</style>