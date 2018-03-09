import React, { Component } from 'react';
import './css/index.css';
import { data } from './data/data';
import ListTest from './components/ListTest';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          text1="Table"
          text2="Responsive"
          text3="Created with love by"
          url="http://pablogarciafernandez.com"
          name="Pablo García Fernández"
        />
        <ListTest data={data}/>
      </div>
    );
  }
}

export default App;
