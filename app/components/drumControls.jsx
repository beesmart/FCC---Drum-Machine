const React = require('react');


class DrumControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
     let className = 'switchOn';
        if (this.props.powerSwitch) {
          className = 'switchOn';
        } else { className = 'switchOff' }
     return (
       <div id="drum-controls">
         <button id="power-switch" className={className} onClick={this.props.clickPower}>Power</button>  
       </div>
      );
  }
 
}

module.exports = DrumControls;