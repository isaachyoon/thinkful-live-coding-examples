import React from 'react';
import './App.css';
import ValidationError from './Components/ValidationError';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        value: '',
        touched: false
      },
      cardNumber: {
        value: '',
        touched: false
      },
      cvv: {
        value: '',
        touched: false
      },
      expMonth: {
        value: '',
        touched: false
      },
      expYear: {
        value: '',
        touched: false
      }
    }
  }

  updateName = (e) => {
    this.setState({name: {value: e, touched: true}});
    console.log(this.state.name)
  }

  validateName(e) {
    const name = this.state.name.value;
    if (name.length < 3) {
      return 'Name length should be greater than 3';
    } else if (/\d/.test(name)) { //checks to see if there's numbers
      return 'Should not container numbers';
    }
  }

  render() {
    return (
      <div className="credit-card-app">
        <form>
          <label>Enter your credit card information</label>
          <div className="input-container">
            <input placeholder="Name" onChange={(e) => this.updateName(e.target.value)}></input>
            {(this.state.name.touched && <ValidationError message={this.validateName()}></ValidationError>)}
          </div>

          <div className="input-container">
            <input placeholder="Card Number"></input>
            <ValidationError></ValidationError>
          </div>

          <input placeholder="CVV2"></input>
          <input placeholder="Exp. Month"></input>
          <input placeholder="Exp. Year"></input>
          <button disabled={this.validateName()}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
