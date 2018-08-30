const React = require('react');


class DrumControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     let className = 'switchOn';
        if (this.props.powerSwitch) {
          className = 'switchOn';
        } else { className = 'switchOff' }
     return (
       <div id="drum-rightbar">
         <div id="drum-controls">
           <button id="power-switch" className={className} onClick={this.props.clickPower}>Power</button>
         </div>
          <div id="drum-iface">
            {this.props.soundText}
         </div>
        
       </div>
      );
  }
 
}

module.exports = DrumControls;