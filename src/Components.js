import React, { Component } from 'react';
import './App.css';
//import $ from 'jquery';
import testData from './users.json';

class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      signedIn : false,
      user : null
    }
    this._getUserProfile = this._getUserProfile.bind(this);
  }

  _getUserProfile(value){
    /* const requestUrl = './users.json';
    $.ajax({
      type: "GET",
      url: requestUrl,
      success: (response) => {
        this.setState({
          user : response,
          loggedIn : true
        });
        console.log(testData);
      }
    }); */
    this.setState({
      user : testData[value],
      signedIn : true
    });
  }

  componentDidMount(){
    this._getUserProfile();
  }

  render(){
    let display = null;
    if(this.state.signedIn && this.state.user){
      //display = <Profile userId={this.state.userId}/>
      display = (
        <div className="Profile">
          <h2 className="Profile-header">Your Profile</h2>
          <ul className="Profile-details">
            <li>Age {this.state.user.age}</li>
            <li>Name {this.state.user.name}</li>
            <li>Location {this.state.user.location}</li>
            <li>Email {this.state.user.email}</li>
            <li>Political Affiliation {this.state.user.political_affiliation}</li>
          </ul>
        </div>
      );
    } else {
      display = (
        <div>
          You should sign in!
          <SigninForm getUserProfile={this._getUserProfile} />
        </div>
      );
    }

    return (
      <div className="Welcome">
      <p>Welcome to Fireside!</p>
      {display}
      </div>
    );

  }
}

class SigninForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : "1"
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event){
    this.setState({
      value : event.target.value
    });
  }

  _handleSubmit(event) {
    alert(`You signed in as: ${this.state.value}!`);
    event.preventDefault();

    this.props.getUserProfile(this.state.value);
  }

  render(){
    return(
      <form onSubmit={this._handleSubmit}>
        <label>
          Sign in to get started:
          <select value={this.state.value} onChange={this._handleChange}>
            <option value="1">User1</option>
            <option value="2">User2</option>
            <option value="3">User3</option>
            <option value="4">User4</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/* class ProfileBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      //
    }
  }

  componentWillMount(){
    //start/prepare processes before DOM loads
  }

  render() {
    return (
      <div className="ProfileBox">
        <div className="ProfileBox-header">
          <h2>Hello! Meet your Fireside fellows</h2>
        </div>
      </div>
    );
  }
}

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="Person">
        <div className="Person-header">
          <h2>Hello! Meet your Fireside fellows</h2>
        </div>
        <div className="Person-details">
          <h2 id="name">Meet So & So</h2>
          <h2 id="age">Age Old</h2>
          <h2 id="locale">From Here!</h2>
        </div>
      </div>
    );
  } 
} */

export default Welcome ;
