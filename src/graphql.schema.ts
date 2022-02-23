
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
    temp: number;
}

export abstract class IQuery {
    abstract weather(input: WeatherForecastInput): WeatherForecastOutput | Promise<WeatherForecastOutput>;
}

type Nullable<T> = T | null;
