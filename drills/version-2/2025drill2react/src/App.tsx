import { useState, useEffect } from 'react';
import { Dino } from './types/types'
import './App.css'
import Header from './components/Header';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

function App() {
  const [dinos, setDinos] = useState<Dino[]>([]);

  useEffect(() => {
    const fetchDinos = async () => {
      const apiUrl = './dinosaurs.json';
      try {
        const res = await fetch(apiUrl);
        const data: Dino[] = await res.json();
        setDinos(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchDinos();
  }, []);
  return (
    <>
    <Header />
    <main>
    <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles">
            <Profiles dinos={dinos}/>
              </ul>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default App
