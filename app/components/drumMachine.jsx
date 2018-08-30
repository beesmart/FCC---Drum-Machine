const React = require('react');
const DrumPad = require('./drumPad');
const DrumControls = require('./drumControls');


const SoundStore1 = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },

]

/* the main page for the index route of this app */
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeUsed: SoundStore1,
      power: true,
      soundId: 0,
      soundText: "Hit the buttons to start a beat"
    }
  }
  
  clickPower(e) {
    e.preventDefault();
    this.setState(prevState => ({
      power: !prevState.power
    }));
  }
  // We're passing this down to the child - drumPad - grabbing the soundID and passing it back up to display as display text.
  getButtonClickId(soundId){
    let result = this.state.storeUsed.filter(sound => {
      return sound.keyTrigger === soundId
    })
    this.setState({
       soundText: result[0].id
    });
  }


  render() {
     return (
       <div id="display" >
         <DrumPad soundStore={this.state.storeUsed} powerSwitch={this.state.power} getButtonClickId={this.getButtonClickId.bind(this)}/>
         <DrumControls clickPower={this.clickPower.bind(this)} powerSwitch={this.state.power} soundText={this.state.soundText}/>
       </div>
      );
  }
 
}


module.exports = DrumMachine;

