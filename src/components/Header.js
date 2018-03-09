import React, { Component } from 'react';
// import { head } from '../data/data';
import Title from './Title';

class Header extends Component {
  render() {
    // let item  = head[0];

    let { text1, text2, text3, url, name } = this.props;
    return (
      // <div>
      //   <h1>
      //     <span className="blue">&lt;</span>{item.title}<span className="blue">&gt;</span>
      //     <span className="yellow">{item.subtitle}</span>
      //   </h1>
      //   <h2>{item.message}
      //     <a href={item.website} target="_blank">{item.author}</a>
      //   </h2>
      // </div>

      <div>
        <Title 
          text1={text1}
          text2={text2}
        />

        <h2>
          {text3}
          <a href={url} target="_blank">{name}</a>
        </h2>
      </div>
    )
  }
}

export default Header;