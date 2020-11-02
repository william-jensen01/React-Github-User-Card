import React from 'react';
import axios from 'axios';
import UserCard from './Components/Card'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/william-jensen01')
      .then(res => {
        console.log("My user: ", res.data)
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/william-jensen01/followers")
      .then(res => {
        console.log("Follower data: ", res.data)
        this.setState({followers: res.data});
      })
      .catch(err => console.log(`Error: ${err}`))
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>

        <UserCard user={this.state.user} />

        <h2>Followers</h2>

        {this.state.followers.map((user) => {
          return (
            <UserCard user={user} />
          );
        })}
      </div>
    )
  }
}

export default App;
