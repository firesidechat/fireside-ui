import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './Components';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: undefined
    };
    this._getPosElem = this._getPosElem.bind(this);
  }

  _getPosElem(){
    const GOOGLE_API_KEY = "AIzaSyBIrzwfODzsK_wx2-urXkQcQIDxEpRY4xk";
    let requestUrl = null;
    navigator.geolocation.getCurrentPosition((whereyouat) => {
      requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${whereyouat.coords.latitude},${whereyouat.coords.longitude}&key=${GOOGLE_API_KEY}`; 
      //alert('Hi! ' + requestUrl);
      $.ajax({
        type: "GET",
        url: requestUrl,
        success: (response) => {
          this.setState({
            location : response.results[0]['formatted_address']
          });
          //console.log(response.results[0]['formatted_address']);
        }
      });
    });
  }

  componentWillMount(nextProps, nextState) {
    this._getPosElem();
  }

  render() {
    let locationElem = null;
    const pos = this.state.location;
    if (pos) {        
        locationElem = <p>You are currently here: {pos}</p>;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {locationElem}
      <Welcome />
      </div>
    );
  }
}

export default App ;
