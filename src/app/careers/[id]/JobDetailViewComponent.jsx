'use client'


import React from 'react'
import { useNowit } from '@/store/useNowit'
import { useEffect } from 'react'
import Loading from '@/app/loading'
import JobDetailView from '@/components/careers/OpportunitiesHub/JobDetailView'

const JobDetailViewComponent = ({ id }) => {
    // console.log(id, "id hereee")
    const { t, tc, commonReady } = useNowit()
    const { setPageKey, isReady } = useNowit();
    console.log(id, "id Here")
    useEffect(() => {
        setPageKey('careers');
    }, [setPageKey, t, tc]);
    if (!isReady) return <Loading />
    const JobList = t("jobList.jobOpenings")
    const data = tc("jobApplicationForm")
    console.log(data, "data here")
    console.log(JobList)
    const Job = JobList?.find((jobid) => jobid.id == id)
    console.log(Job, "job hereee")

    return (
        <div>
            {Job && <JobDetailView job={Job} data={data} />}
        </div>
    )
}

export default JobDetailViewComponent