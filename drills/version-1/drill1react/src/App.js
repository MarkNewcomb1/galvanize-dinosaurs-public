import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import JobList from './Components/JobList';
import AddAJobForm from './Components/AddAJobForm';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      jobs:[]
    }

  }

  componentDidMount() {
    fetch("./listings.json")
      .then( response => response.json())
      .then( data => {
        data.reverse()
        this.setState({ jobs: data })
      })
  }

  iBeClicked = () => {
    console.log("YOU CLICKED ME!!");
  }

  addSubmitEvent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const newJob = {
      title: formData.get('title'),
      description: formData.get('description'),
      pay: formData.get('pay'),
      interested: []
    }
    console.log(newJob);
    this.setState({jobs: [newJob, ...this.state.jobs] })
    
  }

  render() {
    return (
      <div className="App">
      <Header clowns={this.iBeClicked} />
      <main>
        <JobList postings={this.state.jobs} />
        <AddAJobForm send={this.addSubmitEvent} />
      </main>
      <Footer />
      </div>
    );
  }
}

export default App;
