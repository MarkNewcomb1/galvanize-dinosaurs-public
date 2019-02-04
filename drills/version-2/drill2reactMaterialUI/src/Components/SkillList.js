import React from 'react';
import Typography from '@material-ui/core/Typography';

const SkillList = ({skills}) => {    
    return (
        skills.map(skill => {
            return <Typography
            variant="body1"
            key={skill}
            >
            {skill}
            </Typography>
        })
    )
    
}

export default SkillList;