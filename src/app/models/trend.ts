/**
 * Trend : It represents some Person Name
 * with its popularity
 * How many times it has been searched
 */
export interface Page {
    /** The page title */
    trendName: string;
    /** The page URL */
    trendFreq: number;
}
