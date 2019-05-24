import React from 'react';
import './App.css';
import ImageOfTheDay from './ImageOfTheDay';

const API_KEY = 'Eet08CsmxY27bMeZJKNogFLg49IjNtsMOdIbWiAN';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      frontOne: "",
      frontTwo: "",
      rearOne: "",
      rearTwo: "",
      day: '',
      month: '',
      year: '',
    };
  }

  handleOnChange(event)  {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const DATE = `earth_date=${this.state.year}-${this.state.month}-${this.state.day}&api_key=${API_KEY}`
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${DATE}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        frontOne: data.photos[0].img_src,
        frontTwo: data.photos[1].img_src,
        rearOne: data.photos[2].img_src,
        rearTwo: data.photos[3].img_src,
      }));
      document.getElementById("comment-form").reset();
  }

  render() {
    return (
      <div className="App">
        <ImageOfTheDay 
          CameraOne={this.state.frontOne}
          CameraTwo={this.state.frontTwo}
          CameraThree={this.state.rearOne}
          CameraFour={this.state.rearTwo}
        />
        <div className="imageForm">
          <h1>SELECT DATE TO SEE NEW MARS ROVER IMAGE</h1>
          <form 
            id="comment-form"
            onSubmit={this.handleOnSubmit}>
            <input
              required
              name="month" 
              type="text" 
              placeholder=" Month e.g 1 to 12"
              onChange={this.handleOnChange}
            />
            <input
              required
              name="day" 
              type="text" 
              placeholder = " Day e.g. 1 to 30"
              onChange={this.handleOnChange}
            />
            <input
              required
              name="year" 
              type="text" 
              placeholder=" Year e.g. 2016"
              onChange={this.handleOnChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
