import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Even clicks Counter:{this.props.even} </h1>
      </div>
    )
  }
}
