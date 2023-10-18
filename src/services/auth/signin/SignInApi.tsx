import { baseAPI, TAGS } from "@root/services/baseApi";

export const SignInApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    signinApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "login",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS],
    }),
  }),
});

export const { useSigninApiMutation } = SignInApi;
