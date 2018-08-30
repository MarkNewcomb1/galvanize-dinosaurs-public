import React from 'react';

const JobList = (props) => {
const item = props.postings.map((job, index) => {
    return (
    <li key={index}>
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
        {item}
        </ul>
    </section>
)
}

export default JobList;
