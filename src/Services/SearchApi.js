import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const seachApiHeaders={
    'x-rapidapi-key':'79d61ffe18msh14392944de1e02cp1b32d2jsn3bcfc9949a6b',
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