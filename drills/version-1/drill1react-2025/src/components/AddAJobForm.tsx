import { useState } from 'react'
import { Job } from '../types/types'
// type Job = {
//     id: number;
//     title: string;
//     description: string;
//     pay: string;
//     interested: string[];
//   }

type AddAJobFormProps = {
    addJobSubmit: (newJob: Job) => void;
  };
const AddAJobForm = ({ addJobSubmit }: AddAJobFormProps) => {
    // In React, communication from a child component to a parent 
    // component is typically done via callbacks. The child 
    // component (AddAJobForm.tsx) sends the data back up 
    // to the parent (App.tsx) by calling a function passed 
    // down as a prop; addJobSubmit in this case. This allows the parent to "see" the event 
    // without any special emit logic, which is a pattern commonly used in 
    // React (as opposed to the emit method used in Vue.js). 
    const [title, setTitle] = useState('');
    const [pay, setPay] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        const newJob = {
            title,
            pay,
            description,
            interested: ['DefaultValueasarousRex'],
            id: Date.now(),
        };

        addJobSubmit(newJob);
    }
  return (
    <aside id="side-bar">
    <h3>Add a Job</h3>
    <form className="job-form" onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="pay">Compensation</label>
      <input type="text" name="pay" value={pay} onChange={(e) => setPay(e.target.value)} />
      <label htmlFor="description">Description</label>
      <textarea name="description" value={description} rows={8} cols={40} onChange={(e) => setDescription(e.target.value)}></textarea>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </aside>
  )
}

export default AddAJobForm