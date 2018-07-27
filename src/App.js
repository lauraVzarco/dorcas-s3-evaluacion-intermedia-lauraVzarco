import React, { Component } from 'react';
import './App.css';
import Target from './Target';

class App extends Component {
  render() {
    console.log(this.props.pokedata)
    return (
    {this.props.pokedata.map(function(pokemon)){
          return (
              <div>
                <Target/>
              </div>
              );
            }
          );
        });
      }
    }

export default App;
