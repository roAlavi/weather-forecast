/**
 * @fileoverview
 * This is a simple http client to make sure we only create single instance
 * of Axios client to avoid opening multiple connections, also we can customise
 * the way we handle http errors for different status codes
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
};

class HttpClient {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: '',
      headers,
      withCredentials: true,
    });

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  setBaseUrl(url: string) {
    if (this.instance) {
      this.instance.defaults.baseURL = url;
    }
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error) {
    const { status } = error;

    switch (status) {
    case StatusCode.InternalServerError: {
      // Handle InternalServerError
      break;
    }
    case StatusCode.Forbidden: {
      // Handle Forbidden
      break;
    }
    case StatusCode.Unauthorized: {
      // Handle Unauthorized
      break;
    }
    case StatusCode.TooManyRequests: {
      // Handle TooManyRequests
      break;
    }
    }

    return Promise.reject(error);
  }
}

export const httpClient = new HttpClient();