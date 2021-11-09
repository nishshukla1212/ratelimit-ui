import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {RateLimitForm} from "../models/ratelimitInputType";
import {setUserBlock} from "./globalBlockApi";


export function RatelimitForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RateLimitForm>();
    const onSubmit: SubmitHandler<RateLimitForm> = data => setUserBlock(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("pathRegex", { required: true })} />
            {errors.pathRegex && <span>This field is required</span>}
            <input {...register("limit",{ required: true })} />
            {errors.limit && <span>This field is required</span>}
            <input {...register("unit",{ required: true })} />
            {errors.unit && <span>This field is required</span>}
            <input {...register("expiry",{ required: true })} />
            {errors.expiry && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}