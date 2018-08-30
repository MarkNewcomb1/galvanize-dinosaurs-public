import React from 'react';

const Preview = ({ successMessage, previewButton, showPreview, previewString }) => {
    return (
        <React.Fragment>
            <p id="message">{successMessage}</p>
            <button
                id="preview-toggle"
                onClick={previewButton}>Show Preview</button>
            {showPreview ?
                <section id="application-preview">{previewString}</section> :
                <div></div>
            }
        </React.Fragment>
    );
}

export default Preview;