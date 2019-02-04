import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profiles from './Components/Profiles';
import Typography from '@material-ui/core/Typography';

const apiUrl = './dinosaurs.json';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      profiles: [],
      showSkills: false
    }
  }

  componentDidMount() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        profiles: data
      })
    })
  }

  toggleVisibility = (name) => {
    if (this.state.showSkills === name) {
      name = false;
    }
    this.setState({showSkills:name})
  }

  render() {    
    return (
      <div className="App">
        <Header />
        <main>
          <section id="profiles-container">
            <Typography
            variant="headline"
            >
              Profiles
            </Typography>
            <ul id="profiles">
              <Profiles 
              profiles={this.state.profiles} 
              showSkills={this.state.showSkills}
              toggleVisibility={this.toggleVisibility}
              />
            </ul>
          </section>
        </main>
        <Footer />
      </div>
            );
          }
        }
        
export default App;
