/**
 * Image : It represents an Image with 
 * its page that retrieved from the back end
 */
export interface Image {
    /** The page title */
    siteUrl: string;
    /** The page URL */
    imageUrl: string;
    /** The page summary */
    caption: string;
}
