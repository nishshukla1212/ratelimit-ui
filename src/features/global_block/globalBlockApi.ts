import {RateLimitForm} from "../models/ratelimitInputType";

export function setUserBlock(rateLimitForm: RateLimitForm) {
    return new Promise<void>((resolve) =>
    {
        console.log(JSON.stringify(rateLimitForm))
        resolve()
    }
    );
}
