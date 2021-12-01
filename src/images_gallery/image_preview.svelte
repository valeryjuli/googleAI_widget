<script lang='ts'>
    import type { WidgetImage } from '../types/widget_types';
    import { WidgetStore } from '../widget_store';

    /**
     * Props
     */
    export let widgetImage: WidgetImage;
</script>

<div class="image-preview-container">
    <img
        class={$WidgetStore.selectedImage === widgetImage ? "active-image" : "image"}
        src = {widgetImage.base64}
        alt = {widgetImage.alt}
        on:click = {() =>  {
            $WidgetStore.previewMode = false;
            $WidgetStore.selectedImage = widgetImage;
        }}
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
        object-fit: cover;
    }

    .image-preview-container {
        min-width: 0;
        min-height: 0
    }
</style>