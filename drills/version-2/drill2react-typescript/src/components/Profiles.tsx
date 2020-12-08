import React from 'react';
import { Dinosaur } from '../App';
import SkillList from './SkillList';

interface Props {
    showSkills: boolean | string;
    profiles: Array<Dinosaur>;
    toggleVisibility: (name: string) => void;
}

const Profiles: React.FC<Props> = ({ showSkills, profiles, toggleVisibility }): any => {
    return (
        profiles.map(({ name, skills, image }) => {
            return (
                <li key={name} onClick={() => toggleVisibility(name)}>
                    <div className="profile-card">
                        <header className="profile-header">
                            <img src={image} alt="dino" />
                            <h2>{name}</h2>
                        </header>
                        <section className={showSkills == name ? "skills-container" : "skills-container hidden"}>
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