import JobListing from './JobListing'
type Job = {
    id: number;
    title: string;
    description: string;
    pay: string;
    interested: string[];
  };
  
  type JobListingsProps = {
    jobs: Job[]; // Typing jobs as an array of Job objects
  };
  

const JobListings = ({jobs}: JobListingsProps) => {

  return (
    <ul id="job-listings">
        {jobs.map(job => (
            <JobListing key={job.id} job={job} />
        ))}
    </ul>
  )
}

export default JobListings