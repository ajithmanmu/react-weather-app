import React, { Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    //Bind the local method onInputChange to this component
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    //Clear the input after search
    this.setState({term: ''});
  }

  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
      <input
      placeholder="Get a 5 day forecast.."
      className="form-control"
      value={this.state.term}
      onChange={this.onInputChange}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

//mapDispatchToProps is always the second argument. So we are passing null as first argument
export default connect(null, mapDispatchToProps)(SearchBar)
