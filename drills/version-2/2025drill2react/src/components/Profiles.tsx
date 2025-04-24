import { useState } from "react";
import { Dino } from '../types/types'

  type ProfilesProps = {
    dinos: Dino[];
  };
  
  const Profiles = ({dinos}: ProfilesProps) => {
    // Record means an object where the keys are numbers and the values are booleans.
    const [showSkills, setShowSkills] = useState<Record<number, boolean>>({});

    const toggleSkills = (index: number) => {
        setShowSkills((prev) => ({
          ...prev, // copy everything
          // using value of index as the key in the object. 
          // Flip the current value at key passed in as index and overwrite it in the object
          [index]: !prev[index],
        }));
      };
    return (
      <>
      {dinos.map((dino, index) => (
        <div key={index} 
        className="profile-card" 
        onClick={() => toggleSkills(index)}
        style={{ cursor: "pointer" }}
        >
        <header className="profile-header">
          <img src={dino.image} />
          <h2>{dino.name}</h2>
        </header>
        <section className={
              showSkills[index]
                ? "skills-container"
                : "skills-container hidden"
            }>
          <h4>Skills</h4>
          <ul className="skills-list">
            {dino.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
      ))}
      </>
    )
  }
  
  export default Profiles