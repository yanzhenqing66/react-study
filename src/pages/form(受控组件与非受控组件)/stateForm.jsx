import React, { Component } from 'react'

// 受控组件，在state中维护状态
export default class StateForm extends Component {

  state = {
    username: '', 
    password: ''
  }

  // changeForm = (dataType) => {
  //   return (e) => {
  //     this.setState({
  //       [dataType]: e.target.value
  //     })
  //   }
  // }

  changeForm = (dataType, e) => {
    this.setState({
      [dataType]: e.target.value
    })
  }



  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <input type='text' onChange={this.changeForm('username')} name='username' />
          <input type='password' onChange={this.changeForm('password')} name='password' /> */}
          <input type='text' onChange={(e) => this.changeForm('username', e)} name='username' />
          <input type='password' onChange={(e) => this.changeForm('password', e)} name='password' />
        </form>
      </div>
    )
  }
}
