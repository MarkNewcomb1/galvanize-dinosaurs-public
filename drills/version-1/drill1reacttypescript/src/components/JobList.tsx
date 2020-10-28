import React from 'react';
import { JobListing, Jobs } from '../App';

interface JobListProps {
    postings: Jobs
}
export const JobList = ({postings}: JobListProps) => {
    const items = postings.jobs.map((job: JobListing) => {
        return (
            <li key={job.id}>
                <h4>{job.title}</h4>
                <small>{job.pay}</small>
                <p>{job.description}</p>
                <small>{job.interested.length > 1 ? job.interested.length + ' dinos are' : '1 dino is'} interested in this job</small>
            </li>
        )
    })

    return (
        <section>
            <h2>Job Postings</h2>
            <ul id="job-listings">
                {items}
            </ul>
        </section>
    )
}

export default JobList;