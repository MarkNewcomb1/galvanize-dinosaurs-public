import React from 'react';

const Details = (props) => {
    return (
        <section id="job-details">
            <h2>Job Details</h2>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </section>
    );
}

export default Details;