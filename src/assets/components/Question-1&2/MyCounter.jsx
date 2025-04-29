import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer/EvenCounterDisplayer';

export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      even: 0,
    };
  }
  allClicksCounter=() => {
    this.setState((prevCount) =>({
        count:prevCount.count+1 
    }))
    this.setState( (prevcount) =>{
        if (prevcount.count % 2 === 0){
            return {
              even: prevcount.count,
            };
        }
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          {" "}
          <button
            style={{ background: "green", color: "white" }}
            onClick={this.allClicksCounter}
          >
            {" "}
            <h2>Click Here</h2>
          </button>
        </div>

        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer even={this.state.even} />
      </div>
    );
  }
}







