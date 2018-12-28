import React from 'react';

const Form = (props) => {
    return (
        <form id="application-input" onSubmit={props.submitButton}>
            <label>Apply Here: </label>
            <textarea 
            id="application-text" 
            onKeyUp={props.handleKeyUp}
            name="form" 
            rows="8" cols="100"></textarea>
            <input id="submit" type="submit" value="Submit" />
        </form>
    ); 
}

export default Form;