
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class WeatherForecastInput {
    lat: number;
    lon: number;
    date?: Nullable<Date>;
}

export class WeatherForecastOutput {
    description: string;
}

export abstract class IQuery {
    abstract weather(input: WeatherForecastInput): Nullable<WeatherForecastOutput> | Promise<Nullable<WeatherForecastOutput>>;
}

type Nullable<T> = T | null;
