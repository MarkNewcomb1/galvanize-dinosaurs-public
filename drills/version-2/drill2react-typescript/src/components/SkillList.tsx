import React from 'react';

interface SkillsProps {
    skills: Array<string>
}

const SkillList: React.FC<SkillsProps> = ({skills}):any => {
    return (
        skills.map(skill => {
        return <li key={skill}>{skill}</li>
        })
    )
}

export default SkillList;