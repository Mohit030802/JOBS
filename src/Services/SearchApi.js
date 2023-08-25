import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const seachApiHeaders={
    'x-rapidapi-key':'a4aaf17d19msh18ef7777c913113p1f8a2ajsna5656ac932cf',
    'x-rapidapi-host':'jsearch.p.rapidapi.com'
}
const createRequest=(url)=>({url,headers:seachApiHeaders})
export const searchApi=createApi({
    reducerPath:'searchApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsearch.p.rapidapi.com'}),
    endpoints:(builder)=>({
        getJobs:builder.query({
            query:(serachTerm)=>createRequest(`/search?query=${serachTerm}`)
        }),
        getJobsDetails:builder.query({
            query:(job_id)=>createRequest(`/job-details?job_id=${job_id}`)
        })
    })
})

export const {useGetJobsQuery,useGetJobsDetailsQuery}=searchApi