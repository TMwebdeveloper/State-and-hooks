import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>All clicks Counter:{this.props.count}
        </h1>
      </div>
    )
  }
}
