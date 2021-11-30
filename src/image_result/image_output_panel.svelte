<script lang='ts'>
	import ImageProcessSelection from './image_process_selection.svelte';
    import ImageOutput from './image_output.svelte';

</script>

<div class="image-processing-panel">
    <p>Select the feature to apply to selected image:</p>
    <ImageProcessSelection/>
    <ImageOutput/>
</div>

<style>
    .image-processing-panel {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .image-processing-panel > p {
        font-size: 2vmin;
    }
</style>