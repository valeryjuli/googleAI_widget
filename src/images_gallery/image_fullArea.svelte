<script lang='ts'>
    import { WidgetStore } from '../widget_store';

    /**
     * Transition croosfade callbacks
     */
     const {send, receive} = $WidgetStore;
</script>

<div class="image-fullArea" in:receive={{key:$WidgetStore.selectedImage.id}} out:send={{key:$WidgetStore.selectedImage.id}}>
    {#if $WidgetStore.selectedImage}
        <img
            alt = {$WidgetStore.selectedImage.alt}
            src = {$WidgetStore.selectedImage.base64}
            on:click = {() => $WidgetStore.previewMode = true}
        >
    {:else}
        <div class="image-fullArea image-noSelected">
            No image selected, please select an existing image from the gallery or upload a new one.
        </div>
    {/if}
</div>

<style>
    .image-fullArea {
        flex: 1;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        padding: auto;
    }

    .image-fullArea > img{
        border-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image-noSelected {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: beige;
    }
</style>