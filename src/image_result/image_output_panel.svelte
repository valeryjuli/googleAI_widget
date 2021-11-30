<script lang='ts'>
	import ImageProcessSelection from './image_process_selection.svelte';
    import ImageOutput from './image_output.svelte';

    /**
     * Props
     */
    let imageOutputResponse;
    let loadingResult;

</script>

<div class="image-processing-panel">
    <p>Select the feature:</p>
    <ImageProcessSelection bind:imageOutputResponse = {imageOutputResponse} bind:loadingResult = {loadingResult} />
</div>
<ImageOutput bind:imageOutputResponse = {imageOutputResponse}  bind:loadingResult = {loadingResult}/>

<style>
    .image-processing-panel {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
    }

    .image-processing-panel > p {
        font-size: 2vmin;
    }
</style>