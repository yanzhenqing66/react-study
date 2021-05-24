function Chat(props) {
  const {id, name} = props.location.state || {}
  return (
    <>
      <h2>我是微信</h2>
      <p>{id}---{name}</p>
    </>
  )
}

export default Chat