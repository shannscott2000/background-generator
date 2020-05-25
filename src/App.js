import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColorLeft: '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6),
      backgroundColorRight: '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6),
      backgroundColors: []
    };
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    this.setToClickedColor = this.setToClickedColor.bind(this);
  }
  // generates a random background color and saves it to state.
  changeBackgroundColor() {
    this.setState(state => ({
      backgroundColorLeft: '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6),
      backgroundColorRight: '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6)
      // backgroundColors: state.backgroundColors.concat([state.backgroundColorLeft, state.backgroundColorRight])
      // backgroundColors: this.state.backgroundColors.push([this.state.backgroundColorLeft, this.state.backgroundColorRight])
      // backgroundColors:  state.backgroundColors.concat([[`${state.backgroundColorLeft}, ${state.backgroundColorRight}`]])
      // backgroundColors:  state.backgroundColors.push([this.state.backgroundColorLeft, this.state.backgroundColorRight])
    }))
    this.state.backgroundColors.push([this.state.backgroundColorLeft, this.state.backgroundColorRight]);
  }

  setToClickedColor(index) {
    this.setState(state => ({
      backgroundColorLeft: this.state.backgroundColors[index][0],
      backgroundColorRight: this.state.backgroundColors[index][1]
    }));
    console.log(index);
    console.log(this.state.backgroundColors);
  }

  render() {
    return(
      <div className="App"
      style={{
        position: 'fixed',
        height: '100%', 
        width: '100%',
        background: `linear-gradient(to right, ${this.state.backgroundColorLeft}, ${this.state.backgroundColorRight})`
        // backgroundColor: this.state.backgroundColor
      }}>
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <div className="card blue darken-2">
                <div className="card-content white-text">
                  <span className="card-title" style={{fontFamily: 'sans-serif', fontSize: '2.5rem'}}>Color Scheme Generator</span>
                  <p>Click the create button to generate a color scheme.</p>
                  <p>Click on a Recent Color Value to see it again.</p>
                </div>
              </div>
            </div>
            <div className="col s8 center" style={{paddingTop: '5%'}}>
              <h5 style={{fontFamily: 'sans-serif', color: 'black', fontSize: '1.25rem'}}>Current Color Values:  {this.state.backgroundColorLeft} and {this.state.backgroundColorRight}</h5>
              <button className="waves-effect waves-light btn-small blue darken-2" style={{color: 'lightGrey', marginTop: '10px'}}
                onClick={this.changeBackgroundColor}><i className="material-icons right">color_lens</i>Create a Color Scheme
              </button>  
            </div>
            <div className="col s4" style={{paddingTop: '5%'}}>
              <h5 className="center" style={{fontSize: '1.25rem'}}>Recent Color Values</h5>
              <ul>
                {this.state.backgroundColors.slice(Math.max(this.state.backgroundColors.length - 15, 0)).map((color, index) =>(
                  <li key={index}><button className="waves-effect waves-light btn-small blue darken-2"
                    style={
                      {width: '100%',
                      marginTop: '5px',
                      color: 'lightGrey',
                      }
                    }
                    onClick={() => this.setToClickedColor(index)}>{`${color[0]} and ${color[1]}`}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <h4 className="col s9 center">Color Scheme Generator</h4>

export default App;
