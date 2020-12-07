import React, { useEffect, useState, useCallback } from 'react';
import Profiles from './components/Profiles';
import './App.css';

const apiUrl = './dinosaurs.json';

export interface Dinosaur {
  name: string;
  image: string;
  skills: Array<string>;
}

const App = () => {
  const [data, setData] = useState<Array<Dinosaur>>([{"name": "T-Rex", "image": "./assets/dino-1.png", "skills": ["stepping on things", "musing on life", "MS Office"]},{"name": "Utahraptor", "image": "./assets/dino3.png", "skills": ["being contrary"]},{"name": "Dromiceiomimus", "image": "./assets/dino-2.png", "skills": ["Java", "Ninja", "MongoDB", "Git and Github", "Agile"]}]
  );
  const [showSkills, setShowSkills] = useState<boolean | string>(false);

  const fetchData = useCallback(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const toggleVisibility = (name: string | boolean) => {
    if (showSkills === name) {
      name = false;
    }
    setShowSkills(name)
  }
  return (
    <div className="App">
      <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
            <Profiles
            profiles={data}
            showSkills={showSkills}
            toggleVisibility={toggleVisibility}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
