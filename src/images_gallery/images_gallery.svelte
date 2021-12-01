<script lang='ts'>
    import ImagePreview from './image_preview.svelte';
    import ImageFullArea from './image_fullArea.svelte';
	import { WidgetStore } from '../widget_store';
	import ImageUpload from './image_upload.svelte';
</script>

	<div class="images-gallery-container">
		<ImageUpload/>
		<div class="images-grid">
			{#each $WidgetStore.images as image}
			<ImagePreview widgetImage = {image}/>
			{/each}
		</div>
		<ImageFullArea/>
	</div>

<style>
	.images-gallery-container {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		column-gap: 1vmin;
		flex: 1;
	}

	.images-grid {
		display: grid;
		flex: 1;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1;
        overflow: hidden;
	}
</style>