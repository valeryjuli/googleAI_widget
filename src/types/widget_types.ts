/**
 * Describe any image on the widget
 */
export interface WidgetImage {
    /**
     * Unique image identifier
     */
    id: number;
    /**
     * Alternative text to use
     */
    alt: string;
    /**
     * Image in base64
     */
    base64: string;
}