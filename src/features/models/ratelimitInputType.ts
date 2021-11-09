export type RateLimitForm = {
    limit: number,
    unit: string,
    product: string,
    pathRegex: string,
    expiry: string,
}
