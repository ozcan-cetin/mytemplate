import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
});

const baseQueryWithReauth = async (
  args: any,
  api: any,
  extraOptions: any = {}
) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ['data'],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => ({
        url: `/posts`,
        method: "get",
      }),
      providesTags: ["data"],
    }),
    getSingleData: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "get",
      }),
      providesTags: ["data"],
    }),
    createData: builder.mutation({
      query: () => ({
        url: `/posts`,
        method: "post",
      }),
      invalidatesTags: ["data"],
    }),
    updateData: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "put",
      }),
      invalidatesTags: ["data"],
    }),
    deleteData: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "del",
      }),
      invalidatesTags: ["data"],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetSingleDataQuery,
  useCreateDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} = apiSlice;
