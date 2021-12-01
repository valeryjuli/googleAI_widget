<script lang='ts'>
	import ImageProcessSelection from './image_process_selection.svelte';
    import ImageOutput from './image_output.svelte';
    
    import { GOOGLE_API_ENDPOINT, WidgetStore } from '../widget_store';

    /**
     * Google Vision response array
     */
    let imageOutputResponse;
    /**
     * Indicates if final request response have not been received
     */
    let loadingResult;

    /**
     * Request selected image processing to the Google API
     */
    const requestImageResult = (event: Event) => {
            loadingResult = true;
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
            return response.json()
        }).then((responseData) => {
            const responses = responseData.responses;
            console.log(responses)
            imageOutputResponse = responses;
            loadingResult = false;
        })
    }


</script>

<div class="image-processing-panel">
    <ImageProcessSelection bind:imageOutputResponse = {imageOutputResponse} bind:loadingResult = {loadingResult} />
    <button class="go-button"
        on:click = {requestImageResult}
        >
        Go!
    </button>
</div>
<ImageOutput bind:imageOutputResponse = {imageOutputResponse}  bind:loadingResult = {loadingResult}/>

<style>
    .image-processing-panel {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        font-size: 2vmin;
    }

    .go-button {
        background-color: rgba(17, 38, 53, 0.959);
        flex: 1;
        justify-content: center;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        height: 15px;
        display: flex;
        align-items: center;
    }
    .go-button:hover {
        cursor: pointer;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
</style>