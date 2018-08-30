import React from 'react';

const SkillList = ({skills}) => {    
    return (
        skills.map(skill => {
            return <li key={skill}>{skill}</li>
        })
    )
    
}

export default SkillList;