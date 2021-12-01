<script lang='ts'>
	import { GoogleAPIFeatures } from './../widget_store';
    import { GOOGLE_API_ENDPOINT, WidgetStore } from '../widget_store';
    
    /**
     * Props
     */
	export let imageOutputResponse = null;
	export let loadingResult = false;
</script>

<div class="image-process-menu">
    {#each Object.keys(GoogleAPIFeatures) as feature }
        <label>
            <input type="radio" bind:group={$WidgetStore.selectedFeature} name="feature" value={feature} on:click={() => imageOutputResponse = null}>
            {GoogleAPIFeatures[feature]}
        </label>
    {/each}
</div>

<style>
    .image-process-menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-items: center;
        padding: 2%;
    }

    .image-process-menu > label{
        font-size: 0.8em;
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