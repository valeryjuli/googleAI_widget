<script lang='ts'>
    import type { CardContent } from "../types/widget_types";   
    /**
     * Props
    */
    export let cardContent: CardContent;

</script>

<div class='image-result-card' style = 'border: 2px solid {cardContent.color}'>
    <p >{cardContent.description}</p>
    {#if cardContent.score}
        <strong>: {Math.round(cardContent.score * 100) / 100}</strong>
    {/if}
    {#if cardContent.likelihood}
        <strong>: {cardContent.likelihood.toLowerCase()}</strong>
    {/if}
</div>

<style>
    .image-result-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 2vmin;
        border-radius: 15px;
        height: 20px;
        padding: 5px;
    }
</style>