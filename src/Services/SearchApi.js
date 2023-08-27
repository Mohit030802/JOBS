import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const seachApiHeaders={
    'x-rapidapi-key':'9bbe6702fdmshd37fafaff7447d5p1905d0jsna05aa1505902',
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
        }),
        getEstimateSalary: builder.query({
            query: ({ job_title, location, radius }) =>
              `/estimated-salary?job_title=${job_title}&location=${location}&radius=${radius}`,
          }),
    })
})

export const {useGetJobsQuery,useGetJobsDetailsQuery,useGetEstimateSalaryQuery}=searchApi