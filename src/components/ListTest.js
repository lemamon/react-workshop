import React, { Component } from 'react';

class ListTest extends Component {
    render() {
        let data = this.props.data;
        return (
            <table className="container">
            <thead>
              <tr>
                <th>
                  <h1>Sites</h1>
                </th>
                <th>
                  <h1>Views</h1>
                </th>
                <th>
                  <h1>Clicks</h1>
                </th>
                <th>
                  <h1>Average</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(item => 
                  <tr key={item.sites}>
                    <td>{item.sites}</td>
                    <td>{item.views}</td>
                    <td>{item.clicks}</td>
                    <td>{item.average}</td>
                  </tr>
                  )
              }
            </tbody>
          </table>
        );
    }
}

export default ListTest;