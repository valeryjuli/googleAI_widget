<script lang='ts'>
    import { CardContent, EntityAnnotation, FaceAnnotation, GoogleAPIResponse, GoogleAPIResponseTypes, ImageAnnotation, LocalizedObjectAnnotation, TextAnnotation } from "../types/widget_types";
    import AnnotatedImage from "./annotated_image.svelte";
    import ResultCard from "./image_result_card.svelte";

    /**
     * Google Vision response array
     */
	export let imageOutputResponse: Array<GoogleAPIResponse>;
    /**
     * Indicates if final request response have not been received
     */
	export let loadingResult = false;

    let cardsContent: Array<CardContent>  = [];
    let imageAnnotations: Array<ImageAnnotation>  = [];
    
    /**
     * Update props with Google API response information
     * @param imageOutputResponse
     */
    const parseResult = (imageOutputResponse: Array<GoogleAPIResponse>) => {
        if (imageOutputResponse) {
            const outputObject = imageOutputResponse[0];
            const typeOfResult = Object.keys(outputObject)[0];
            cardsContent = [];
            imageAnnotations = [];
            switch (typeOfResult) {
                case GoogleAPIResponseTypes.TEXT_DETECTION:
                    const outputTextAnnotation = outputObject['fullTextAnnotation'] as TextAnnotation;
                    const color = "#" + Math.floor(Math.random() * (1 << 3 * 8)).toString(16).padStart(6, "0");
                    cardsContent = [{
                        description: outputTextAnnotation.text,
                        color,
                    }]
                    break;
                case GoogleAPIResponseTypes.OBJECT_LOCALIZATION:
                        const outputObjectLocalization = outputObject[GoogleAPIResponseTypes.OBJECT_LOCALIZATION] as Array<LocalizedObjectAnnotation>;
                        outputObjectLocalization.forEach((object) => {
                            const color = "#" + Math.floor(Math.random() * (1 << 3 * 8)).toString(16).padStart(6, "0");
                            cardsContent.push({
                                description: object.name,
                                score: object.score,
                                color,
                            })
                            imageAnnotations.push({
                                description: object.name,
                                boundingPoly: object.boundingPoly,
                                color,
                                normalized: true,
                            })
                        })
                        break;
                case GoogleAPIResponseTypes.LABEL_DETECTION:
                    const outputLabelAnnotations = outputObject[GoogleAPIResponseTypes.LABEL_DETECTION] as Array<EntityAnnotation>;
                    outputLabelAnnotations.forEach((object) => {
                        const color = "#" + Math.floor(Math.random() * (1 << 3 * 8)).toString(16).padStart(6, "0");    
                        cardsContent.push({
                                description: object.description,
                                score: object.score,
                                color,
                            })
                    })
                    break;
                case GoogleAPIResponseTypes.FACE_DETECTION:
                    const outputFaceAnnotations = outputObject[GoogleAPIResponseTypes.FACE_DETECTION] as Array<FaceAnnotation>;
                        outputFaceAnnotations.forEach((object) => {
                            const color = "#" + Math.floor(Math.random() * (1 << 3 * 8)).toString(16).padStart(6, "0");
                            cardsContent.push({
                                description: 'JOY',
                                likelihood: object.joyLikelihood,
                                color,
                            })
                            imageAnnotations.push({
                                description: String(object.detectionConfidence),
                                boundingPoly: object.boundingPoly,
                                normalized: false,
                                color,
                            })
                        })
                    break;
                default:
                    cardsContent = [{description: 'No results', color: "#" + Math.floor(Math.random() * (1 << 3 * 8)).toString(16).padStart(6, "0")}];
                    break;
            }
        }
    }
    $: parseResult(imageOutputResponse);
</script>

<div class="image-output">
    {#if imageOutputResponse}
        {#if !loadingResult}
        <AnnotatedImage bind:imageAnnotations = {imageAnnotations} {imageOutputResponse}/>
        <div class="image-cards-output">
            {#each cardsContent as cardContent}
                <ResultCard cardContent={cardContent}/>
            {/each}
        </div>
        {/if}
    {/if}
    {#if loadingResult}
        <img alt="loading" src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif">
    {/if}
</div>

<style>
    .image-output {
        display: flex;
        flex-direction: column;
        flex: 2;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        padding: auto;
    }

    .image-cards-output {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 8px;
        background-color: rgba(17, 38, 53, 0.959);
        color: white;
    }
</style>