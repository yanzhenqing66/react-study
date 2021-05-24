import React from 'react'

// 非受控组件，也就是说什么时候用，什么时候收集表单数据
class RefForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.username.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={e => this.username = e} name="username" />
          <button>登录</button>
        </form>
      </div>
    )
  }
}

export default RefForm