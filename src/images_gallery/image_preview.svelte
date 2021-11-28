<script lang='ts'>
    import type { WidgetImage } from '../types/widget_types';
    import { ImageGalleryStore } from './image_gallery_store';

    /**
     * Transition croosfade callbacks
     */
	const {send, receive} = $ImageGalleryStore;

    /**
     * Props
     */
    export let widgetImage: WidgetImage;
</script>

<div class="image-preview-container">
    <img
        class={$ImageGalleryStore.selectedImage === widgetImage ? "active-image" : "image"}
        src = {widgetImage.path}
        alt = {widgetImage.alt}
        on:click = {() =>  {
            $ImageGalleryStore.previewMode = false;
            $ImageGalleryStore.selectedImage = widgetImage;
        }}
        in:receive={{key:widgetImage.id}}
        out:send={{key:widgetImage.id}}
    >
</div>

<style>
    .image-preview-container > .active-image {
		border: 2px solid brown;
    }
    .image-preview-container > img {
		width: 100%;
		height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        object-fit: cover;
    }

    .image-preview-container {
        min-width: 0;
        min-height: 0
    }
</style>