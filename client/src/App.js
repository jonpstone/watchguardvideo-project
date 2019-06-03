import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react'
import ImageOfTheDay from './ImageOfTheDay';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      // Mars Rover hazard avoidance cameras
      cams: [],
      // Calendar attributes, initial date and focus set to false
      date: moment(),
      focused: false,
      // Error message for bad, missing or empty data values
      errorMessage: "",
    };
  }

  componentDidMount() {
    // Calls date parser to retreive up to date images for inital render
    this.dateParser();
  }

  handleOnSubmit = (event) => {
    // To prevent browser loading a new page
    event.preventDefault();
    // In the event that an error message is displayed for lack of data,
    // the error message is reset so it doesn't trigger in the display function
    this.setState({ errorMessage: "" });
    // dateParser runs and fetches data, updating state and rerendering the
    // component and ultimately the display function
    this.dateParser();
  }

  dateParser() {
    // Variable containing the dynamically interpolated string to be added to
    // the API call, including date and auth key
    const imgArray = [];
    const API = `earth_date=${
        this.state.date.format('Y')}-${
          this.state.date.format('M')}-${
            this.state.date.format('D')
              }&api_key=Eet08CsmxY27bMeZJKNogFLg49IjNtsMOdIbWiAN`
    // API call with dynamically created string added on at the end
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${API}`)
      .then(response => response.json())
    // Ternary check for bad or missing data followed by setState call
    // depending on the result 
      .then(data => data.photos && data.photos.length ?
        imgArray.push(
          data.photos[0].img_src, 
          data.photos[1].img_src, 
          data.photos[2].img_src,
          data.photos[3].img_src,
          ) &&
        this.setState({
          cams: imgArray
        }) : 
        this.setState({
          errorMessage: "NO DATA FOUND"
        }
      )
    );
  }

  display() {
    // Begins with a ternary check for the presence of an error message
    return this.state.errorMessage ?
    // It will display if true
    (
      <div className="errorMessage">{this.state.errorMessage}</div>
    ) : (
    // If false it will render a child component with the hazard avoidance 
    // camera images passed in as props
      <div data-test="imageOfTheDay">
      <ImageOfTheDay
        Cameras={this.state.cams}
      />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="imageForm">
          <h1>SELECT DATE TO SEE MARS ROVER IMAGE</h1>
          <form 
            onSubmit={this.handleOnSubmit}
            data-test="form">
            {/* SingleDatePicker takes in values from state as well as
            other attributes from the react-dates API */}
            <SingleDatePicker
              required
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              numberOfMonths={6}
              isOutsideRange={day => (moment().diff(day) < 0)}
              initialVisibleMonth={() => moment().add('months', -5)}
              showDefaultInputIcon
            />
            {/* Submit updates date and calls dateParser to fetch new data
            from the API */}
            <Button id="button" type="submit">Submit</Button>
          </form>
        </div>
        {this.display()}
      </div>
    );
  }}

export default App;
