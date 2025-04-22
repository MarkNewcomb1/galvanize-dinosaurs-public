import { useState, useEffect } from 'react';
import { Job } from './types/types'
import AddAJobForm from './components/AddAJobForm';
import Header from './components/Header';
import JobListings from './components/JobListings';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
      const fetchJobs = async () => {
          const apiUrl = '/listings.json';
          try {
              const res = await fetch(apiUrl);
              const data = await res.json();
              setJobs(data);
          } catch (error) {
              console.log('Error fetching data', error);
          }
      };

      fetchJobs();
  }, []);

// The Communication Flow:
// The Parent Component (App.tsx) defines the addJob function.

// It passes this function to the child component (AddAJobForm.tsx) as a prop called addJobSubmit.

// In the child component, when the form is submitted, it calls addJobSubmit(newJob) and passes 
// the new job object as an argument to the parent’s addJob function.

// The parent component receives this new job object and can update its state 
// (e.g., using setJobs) to reflect the new job.

// Why No Special Emit Logic?
// React's design encourages a top-down data flow (unidirectional), 
// so parents pass down functions (callbacks) to their children, and 
// children invoke those functions to send data back up to the parent. 
// This avoids the need for an emit-style mechanism like in Vue, where 
// the parent listens for an event from the child. Instead, React simply 
// relies on props and callback functions.

// So, React doesn’t need an explicit event system for child-to-parent communication. 
// The callback function passed via props handles the communication between the components directly.

  const addJob = (newJob: Job) => {
    setJobs((prevJobs) => [...prevJobs, {...newJob}]);
  }
  return (
    <div className="body">
      <Header />
    <main>
      <section>
        <h2>Job Listings</h2>
        <JobListings jobs={jobs}/>
      </section>
    <AddAJobForm addJobSubmit={addJob} />
      </main>
    <Footer />
    </div>
  )
}

export default App
