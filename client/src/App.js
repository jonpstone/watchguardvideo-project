import React from 'react';
import './App.css';
import ImageOfTheDay from './ImageOfTheDay';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
      };
    }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
        <ImageOfTheDay 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
