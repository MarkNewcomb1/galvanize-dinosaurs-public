import React, { Component } from 'react';
import Header from './Components/Header';
import JobDetails from './Components/JobDetails';
import Form from './Components/Form';
import Preview from './Components/Preview';
import Footer from './Components/Footer';
import './App.css';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      description: '',
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
  
  render() {
    return (
      <div>
        <Header/>
        <JobDetails
        title={this.state.title}
        description={this.state.description}
        />
        <Form 
        submitButton={this.props.submitFunction}
        handleKeyUp={this.props.handleKeyUp}
        />
        <Preview 
        successMessage={this.props.successMessage}
        previewString={this.props.str}
        previewButton={this.props.togglePreview}
        showPreview={this.props.showPreview}
        />
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      showPreview: state.showPreview,
      str: state.str,
      successMessage: state.successMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    togglePreview: () => dispatch({type: actionTypes.TOGGLE_PREVIEW}),
    submitFunction: (event) => dispatch({type: actionTypes.SUBMIT_FORM, e: event}),
    handleKeyUp: (event) => dispatch({type: actionTypes.HANDLE_KEYUP, e: event})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);