import React, {Component} from 'react';

export default class App extends Component {

  state = {
    alertColor: ''
  }

  randomAlert() {
    const randomNum = (Math.ceil(Math.random() * 100));
    if( randomNum <= 33) {
      this.setState({
        alertColor: 'success'
      })
    } else if (randomNum >= 34 && randomNum <= 66) {
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
    let {alertColor} = this.state;

    const classes=`alert alert-${alertColor}`;
    const alertMessage = (
      <div className={classes} role="alert">
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
      </div>
    );
  } 
}
