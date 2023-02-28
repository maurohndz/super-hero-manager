import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getHeroes: builder.query({
      query: () => '/todos'
    })
  })
})

export const { useGetHeroesQuery } = charactersApi
export default charactersApi