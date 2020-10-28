import React, { useEffect, useState, useCallback} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import JobList from './components/JobList';
import AddAJobForm from './components/AddAJobForm';
import Footer from './components/Footer';

export interface JobListing {
  id?: any,
  title: string,
  description: string,
  pay: string,
  interested: Array<string>
}

export interface Jobs {
  jobs: Array<JobListing>
}

export interface FormData {
  id?: any,
  title?: string,
  pay?: string,
  description?: string,
  interested?: Array<string>
}

const App = () => {

  const [jobsOuterObject, setJobs] = useState<Jobs>({ jobs: []});
  const fetchJobs = useCallback(() => {
    fetch('./listings.json')
    .then(response => response.json())
    .then(data => {
      data.reverse()
      setJobs({jobs: data})
    })
  }, []);

  const addAJob = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, formData:JobListing) => {
    e.preventDefault();
    const existingJobs = jobsOuterObject.jobs;
    formData.id = uuidv4();
    formData.interested = [];
    setJobs({jobs: [formData, ...existingJobs]})
  }

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div>
      <Header />
      <main>
      <JobList postings={jobsOuterObject} />
      <AddAJobForm addAJob={addAJob} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
