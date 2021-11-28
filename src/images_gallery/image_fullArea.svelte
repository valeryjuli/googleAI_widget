<script lang='ts'>
	// import ImageGalleryStore, { DEMO_IMAGES_SRC } from './image_gallery_store';
    import { ImageGalleryStore } from './image_gallery_store';

    /**
     * Transition croosfade callbacks
     */
     const {send, receive} = $ImageGalleryStore;
</script>

<div class="image-fullArea" in:receive={{key:$ImageGalleryStore.selectedImage.id}} out:send={{key:$ImageGalleryStore.selectedImage.id}}>
    <img
        alt = {$ImageGalleryStore.selectedImage.alt}
        src = {$ImageGalleryStore.selectedImage.path}
        on:click = {() => $ImageGalleryStore.previewMode = true}
    >
</div>

<style>
    .image-fullArea {
        flex: 1;
    }
    .image-fullArea > img{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        padding: auto;
        object-fit: cover;
    }
</style>