import { baseAPI, TAGS } from "@root/services/baseApi";

export const ContactUsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    contactUsApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "contact-us",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS],
    }),
  }),
});

export const { useContactUsApiMutation } = ContactUsApi;
