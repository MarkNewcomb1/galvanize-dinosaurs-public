import React from 'react';
import SkillList from './SkillList';

const Profiles = ({showSkills, profiles, toggleVisibility}) => {
    return (
        profiles.map(({name, skills, image}) => {
            return (
                <li key={name} onClick={ () =>toggleVisibility(name)}>
                    <div className="profile-card">
                        <header className="profile-header">
                            <img src={image} alt="dino" />
                            <h2>{name}</h2>
                        </header>
                        <section className={ showSkills == name ? "skills-container" : "skills-container hidden" }>
                            <h4>Skills</h4>
                            <ul className="skills-list">
                                <SkillList skills={skills} />
                            </ul>
                        </section>
                    </div>
                </li>
            )
        })
    )
}

export default Profiles;