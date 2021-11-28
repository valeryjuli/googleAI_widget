<script lang='ts'>
    import ImagePreview from './image_preview.svelte';
    import ImageFullArea from './image_fullArea.svelte';
	import { ImageGalleryStore } from './image_gallery_store';

	import ImageUpload from './image_upload.svelte';

</script>

	<div class="image-browser-container">
		<div class="images-grid">
			<div class="image-drop-zone">
				<ImageUpload/>
			</div>
			{#each $ImageGalleryStore.images as image}
				<ImagePreview widgetImage = {image}/>
			{/each}
		</div>
		{#if $ImageGalleryStore.previewMode === false}
				<ImageFullArea/>
		{/if}
	</div>

<style>
	.container {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.image-browser-container {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 52vmin;
		height: 76vmin;
		border: 0.3vmin solid #ccc;
		padding: 3vmin;
		border-radius: 2vmin;
	}

	h1 {
		font-weight: 300;
		text-transform: uppercase;
		font-size: 2vmin;
		margin: 0.2em 0 0.5em 0;
	}

    .image-drop-zone {
        background-color: whitesmoke;
        grid-area: 1 / 1 / 2 / 4;
    }

	.images-grid {
		display: grid;
		flex: 1;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 1vmin;
        overflow: hidden;
	}

	button {
		width: 100%;
		height: 100%;
		color: white;
		font-size: 5vmin;
		border: none;
		margin: 0;
		will-change: transform;
	}

	.photo, img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.photo {
		display: flex;
		align-items: stretch;
		justify-content: flex-end;
		flex-direction: column;
		will-change: transform;
	}

	img {
		object-fit: cover;
		cursor: pointer;
	}
</style>