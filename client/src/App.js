import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import ImageOfTheDay from './ImageOfTheDay';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';

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
      date: moment(),
      focused: false
    };
  }

  handleOnChange(event)  {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const API = 'Eet08CsmxY27bMeZJKNogFLg49IjNtsMOdIbWiAN';
    const DD = this.state.date.format('D');
    const MM = this.state.date.format('M');
    const YYYY = this.state.date.format('Y');
    const DATE = `earth_date=${YYYY}-${MM}-${DD}&api_key=${API}`
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${DATE}`)
      .then(response => response.json())
      .then(data => this.setState({ 
        frontOne: data.photos[0].img_src,
        frontTwo: data.photos[1].img_src,
        rearOne: data.photos[2].img_src,
        rearTwo: data.photos[3].img_src,
      }));
  }

  render() {
    return (
      <div className="App">
        <ImageOfTheDay 
          CameraOne={this.state.frontOne}
          CameraTwo={this.state.frontTwo}
          CameraThree={this.state.rearOne}
          CameraFour={this.state.rearTwo}
          Day={this.state.date.format('D')}
          Month={this.state.date.format('M')}
          Year={this.state.date.format('Y')}
        />
        <div className="imageForm">
          <h1>ENTER DATE TO SEE MARS ROVER IMAGE</h1>
          <form 
            onSubmit={this.handleOnSubmit}>
            <SingleDatePicker
              required
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              isOutsideRange={() => false}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
