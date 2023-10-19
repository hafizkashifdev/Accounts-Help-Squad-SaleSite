import { baseAPI, TAGS } from "@root/services/baseApi";

export const SignupApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    signupApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "signup",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS],
    }),
  }),
});

export const { useSignupApiMutation } = SignupApi;
