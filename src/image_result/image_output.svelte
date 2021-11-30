<script lang='ts'>
    import { WidgetStore } from '../widget_store';
</script>

<div class="image-output">
    {#if $WidgetStore.selectedImage}
        <img
            alt = {$WidgetStore.selectedImage.alt}
            src = {$WidgetStore.selectedImage.base64}
            on:click = {() => $WidgetStore.previewMode = true}
        >
    {:else}
        <div class="image-output image-noSelected">
            No image yet.
            {$WidgetStore.selectedFeature}
        </div>
    {/if}
</div>

<style>
    .image-output {
        flex: 1;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        padding: auto;
        overflow: hidden;
    }

    .image-output > img{
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
        background-color: darkorange;
    }
</style>