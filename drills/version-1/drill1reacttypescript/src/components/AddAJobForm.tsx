import React, { useState } from 'react';
import { FormData } from '../App';
export const AddAJobForm = ({addAJob}:any) => {

    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    return (
        <aside id="side-bar">
            <h3>Add a Job</h3>
            <form className="job-form" onSubmit={(e) => addAJob(e, formData)}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={(e) => handleInputChange(e)} />
                <label htmlFor="pay">Compensation</label>
                <input type="text" name="pay" onChange={(e) => handleInputChange(e)} />
                <label htmlFor="description">Description</label>
                <textarea name="description" rows={8} cols={40} onChange={(e) => handleInputChange(e)}></textarea>
                <input type="submit" name="submit" value="Submit" />
            </form>
        </aside>
    );
}

export default AddAJobForm;