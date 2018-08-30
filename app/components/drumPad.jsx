const React = require('react');

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.clickMakeSound = this.clickMakeSound.bind(this);
    this.handleKey = this.handleKey.bind(this);
  
  }
  
  clickMakeSound(soundId) {
    if(this.props.powerSwitch === true){
        let targetSound = document.getElementById(soundId)
        targetSound.currentTime = 0;
        targetSound.play();
        this.props.getButtonClickId(soundId); 
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }
  
  handleKey(e) {
    let result = this.props.soundStore.filter(sound => {
      return sound.keyCode === e.keyCode
    })
    this.clickMakeSound(result[0].keyTrigger)
  }
    
  render() {
     return (
       <div id="drum-buttons"> 
         {
           this.props.soundStore.map((sound, i) => 
               <button id={sound.id} onKeyDown={this.handleKey} className="drum-pad" key={i} onClick={this.clickMakeSound.bind(this, sound.keyTrigger)}>
                 <audio id={sound.keyTrigger} className="clip" src={sound.url} autostart="false"></audio>
                {sound.keyTrigger}
  
               </button>)
         }
       </div>
      );
  }
 
}

module.exports = DrumPad;