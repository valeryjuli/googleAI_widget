<script lang='ts'>
	import { GoogleAPIFeatures } from './../widget_store';
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

<div class="image-process-menu">
    {#each Object.keys(GoogleAPIFeatures) as feature }
        <label>
            <input type="radio" bind:group={$WidgetStore.selectedFeature} name="feature" value={feature}>
            {GoogleAPIFeatures[feature]}
        </label>
    {/each}
    <button
        on:click = {requestImageResult}
        >
        Go!
    </button>
</div>

<style>
    .image-process-menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .image-process-menu > label{
        font-size: 2vmin;
        flex: 1;
        font-family: system-ui, sans-serif;
        font-weight: bold;
        line-height: 1.1;
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;
    }

    input[type="radio"] {
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    }

    input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    }

    input[type="radio"]:checked::before {
    transform: scale(1);
    }
</style>