<script lang='ts'>
    import { WidgetStore } from '../widget_store';
</script>

<div class="image-fullArea">
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
        flex: 5;
        width: 100%;
        height: 100%;
        padding: auto;
        overflow: hidden;
    }

    .image-fullArea > img{
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