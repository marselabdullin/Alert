import React, {Component} from 'react';
import Inter from './components/inter';

export default class App extends Component {

  state = {
    alertColor: ''
  }

  randomAlert() {

    const randomNum = Math.random();

    if( randomNum <= 0.33 ) {
      this.setState({
        alertColor: 'success'
      })
    } else if ( randomNum <= 0.66 ) {
      this.setState({
        alertColor: 'danger'
      })
    } else {
      this.setState({
        alertColor: 'warning'
      })
    }
  }

  render() {
    const {alertColor} = this.state;
    const alertMessage = (
      <div className={`alert alert-${alertColor}`} role="alert">
        Уведомление
      </div>
    )

    return (
      <div className="container">
        <header className="App-header">
          {alertColor ? alertMessage : null}
        </header>
        <div className="d-flex justify-content-center">
          <button 
            type="button" 
            className="btn btn-secondary d-flex"
            onClick={() => this.randomAlert()}
          >
            Получить уведомление!
          </button> 
        </div>
        <Inter />
      </div>
    );
  } 
}
