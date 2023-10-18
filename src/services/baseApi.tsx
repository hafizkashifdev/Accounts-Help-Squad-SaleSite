// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Config
import { BASE_URL } from "@root/config";

// Tags
export const TAGS: any = ["CONTACT-US", "SIGNUP", "SIGNIN"];

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const baseAPI = createApi({
  reducerPath: "api",
  // baseQuery: baseQueryWithRetry,
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
