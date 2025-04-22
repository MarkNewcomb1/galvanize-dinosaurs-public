type Job = {
  id: number;
  title: string;
  description: string;
  pay: string;
  interested: string[];
};

type JobListingProps = {
  job: Job;
};

const JobListing = ({ job }: JobListingProps) => {
  const interestedCount = job.interested?.length ?? 0;
  return (
    <li>
    <h4>{job.title}</h4>
    <small>{job.pay}</small>
    <p>{job.description}</p>
    <small>{interestedCount > 1 ? `${interestedCount} dinos are` : '1 dino is'}{' '}interested in this job</small>
</li>
  )
}

export default JobListing