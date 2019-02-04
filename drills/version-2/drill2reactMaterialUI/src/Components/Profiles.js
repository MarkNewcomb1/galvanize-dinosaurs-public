import React from 'react';
import SkillList from './SkillList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Profiles = ({showSkills, profiles, toggleVisibility}) => {
    return (
        profiles.map(({name, skills, image}) => {
            return (
                <li key={name} onClick={ () =>toggleVisibility(name)} style={{marginBottom: '10px'}}>
                    <Paper 
                    elevation={12}
                    square={true}
                    className="profile-card">
                        <header className="profile-header">
                            <img src={image} alt="dino" />
                            <Typography
                            variant="title"
                            >{name}</Typography>
                        </header>
                        <section className={ showSkills === name ? "skills-container" : "skills-container hidden" }>
                            <Typography
                            variant="subheading"
                            >Skills</Typography>
                            <ul className="skills-list">
                                <SkillList skills={skills} />
                            </ul>
                        </section>
                    </Paper>
                </li>
            )
        })
    )
}

export default Profiles;