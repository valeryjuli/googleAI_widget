<script lang='ts'>
	import ImageProcessSelection from './image_process_selection.svelte';
    import ImageOutput from './image_output.svelte';
    import { GOOGLE_API_ENDPOINT, WidgetStore } from '../widget_store';

    /**
     * Request selected image processing to the Google API
     */
    const requestImageResult = (event: Event) => {
        fetch(GOOGLE_API_ENDPOINT, 
        {
            method: 'POST',    
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    requests: [{
                        features: [{
                            type: $WidgetStore.selectedFeature,
                            maxResults: 10,
                        }],
                        image: {
                            content: $WidgetStore.selectedImage.base64.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
                        },
                    }]
            })
        }).then((response) => {
            $WidgetStore.loadingResult = true;
            return response.json()
        }).then((responseData) => {
            console.warn(responseData)
        })
    }

</script>

<div class="image-processing-panel">
    <ImageProcessSelection/>
    <button
        on:click = {requestImageResult}
        >
        Go!
    </button>
    <ImageOutput/>
</div>

<style>
    .image-processing-panel {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>