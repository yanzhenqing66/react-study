import React, { Component } from 'react'

export default class RefExc extends Component {
  myRef = React.createRef()

  blur1 = () => {
    console.log(this.refs.input1.value);
  }

  blur2 = () => {
    console.log(this.refFunc.value);
  }

  refFunc2 = (e) => {
    console.log(e);
  }

  // blur3 = () => {
  //   this.refFunc2()
  // }

  blur4 = () => {
    console.log(this.myRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref="input1" onBlur={this.blur1} />
        <input type="text" ref={e => this.refFunc = e} onBlur={this.blur2}  />
        <input type="text" ref={this.refFunc2} onBlur={this.blur3}  />
        <input type="text" ref={this.myRef} onBlur={this.blur4}  />
      </div>
    )
  }
}