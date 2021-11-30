<script lang='ts'>
	import { GoogleAPIFeatures } from './../widget_store';
    import { WidgetStore } from '../widget_store';
</script>

<div class="image-process-menu">
    {#each Object.keys(GoogleAPIFeatures) as feature }
        <label>
            <input type="radio" bind:group={$WidgetStore.selectedFeature} name="feature" value={feature}>
            {GoogleAPIFeatures[feature]}
        </label>
    {/each}
</div>

<style>
    .image-process-menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .image-process-menu > label{
        font-size: 2vmin;
    }
</style>