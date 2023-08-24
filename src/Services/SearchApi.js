import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const seachApiHeaders={
    'x-rapidapi-key':'6c74ff057bmsh36de890169a88e1p146495jsn0faa64769851',
    'x-rapidapi-host':'jsearch.p.rapidapi.com'
}
const createRequest=(url)=>({url,headers:seachApiHeaders})
export const searchApi=createApi({
    reducerPath:'searchApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsearch.p.rapidapi.com'}),
    endpoints:(builder)=>({
        getJobs:builder.query({
            query:(serachTerm)=>createRequest(`/search?query=${serachTerm}`)
        })
    })
})

export const {useGetJobsQuery}=searchApi