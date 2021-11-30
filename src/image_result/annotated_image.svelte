<script lang='ts'>
    import { onMount } from 'svelte';
import type { Coordinates, GoogleAPIResponse, ImageAnnotation } from '../types/widget_types';
    import { WidgetStore } from '../widget_store';

    /**
     * Props
     */
     export let imageAnnotations: Array<ImageAnnotation>;
     export let imageOutputResponse: Array<GoogleAPIResponse>;

     let canvas: HTMLCanvasElement;

     onMount(() => {
         if (imageOutputResponse) {
            render(imageOutputResponse)
         }
     });

     /**
      * Render image and annotations on imageOutputResponse change
      */
     const render = (imageOutputResponse: Array<GoogleAPIResponse>) => {
         if (canvas) {
             const canvasContext = canvas.getContext('2d');
             const image = new Image();
             image.onload = () => {
                canvasContext.clearRect(0, 0, 100, 150);
                canvasContext.beginPath();
                canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                
                imageAnnotations.forEach((annotation) => {
                    drawRectangle(canvasContext, annotation)
                })
             }
             image.src = $WidgetStore.selectedImage.base64;
         }
     }
     $: render(imageOutputResponse);

     /**
      * Return rectangle annotation coordinates
      * @param canvasWidth 
      * @param canvasHeight
      * @param vertices
      * @param normalized
      */
    const getRectangleCoordinates = (canvasWidth: number, canvasHeight: number, vertices: Array<Coordinates>,
        normalized: boolean): Array<number> => {
        const xCoords = vertices.map( coordinate => (normalized ? coordinate.x * canvasWidth : coordinate.x));
        const yCoords = vertices.map( coordinate =>  (normalized ? coordinate.y * canvasHeight : coordinate.y));
        const minX = Math.min.apply(null, xCoords);
        const minY = Math.min.apply(null, yCoords);
        const maxX = Math.max.apply(null, xCoords);
        const maxY = Math.max.apply(null, yCoords);
        return [minX, minY, maxX - minX, maxY - minY]
    }

    /**
     * Draw annotation rectangle on canvas
     */
    const drawRectangle = (canvasContext: CanvasRenderingContext2D, annotation: ImageAnnotation) => {
        canvasContext.beginPath();
        const rectCoordinates = getRectangleCoordinates(
            canvas.width, 
            canvas.height, 
            annotation.normalized ? annotation.boundingPoly.normalizedVertices : annotation.boundingPoly.vertices,
            annotation.normalized)
        canvasContext.rect(rectCoordinates[0], rectCoordinates[1], rectCoordinates[2], rectCoordinates[3]);
        canvasContext.lineWidth = 1;
        canvasContext.strokeStyle = annotation.color;
        canvasContext.stroke();
    }
</script>

<div class="annotated-image">
    <canvas class='annotated-image-canvas'
        bind:this={canvas}
    >
    </canvas>
</div>

<style>
    .annotated-image-canvas {
        flex: 3;
        width: 100%;
        height: 100%;
        padding: auto;
        overflow: hidden;
    }
</style>