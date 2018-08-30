import React, { Component } from 'react';
import Header from './Components/Header';
import JobDetails from './Components/JobDetails';
import Form from './Components/Form';
import Preview from './Components/Preview';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "",
      title: [],
      description: "",
      successMessage: "",
      showPreview: false
    };
  }

  componentDidMount() {
    let apiURL = './listing.json';
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        title: data.title,
        description: data.description
      })
    })
  }

  togglePreview = () => {
    this.setState({showPreview: !this.state.showPreview})
  }

  submitFunction = (event) => {
    event.preventDefault();    
    this.setState({
      str: new FormData(event.target).get("form"),
      successMessage: "Your Application was submitted!"
    })   
  }

  handleKeyUp = (event) => {
    this.setState({str: event.target.value});
  }
  
  render() {
    return (
      <div>
        <Header/>
        <JobDetails
        title={this.state.title}
        description={this.state.description}
        />
        <Form 
        submitButton={this.submitFunction.bind(this)}
        handleKeyUp={this.handleKeyUp.bind(this)}
        />
        <Preview 
        successMessage={this.state.successMessage}
        previewString={this.state.str}
        previewButton={this.togglePreview}
        showPreview={this.state.showPreview}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;