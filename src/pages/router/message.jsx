import qs from 'querystring'

function Message(props) {
  const {search} = props.location
  const {id, name} = qs.parse(search.slice(1))
  return (
    <>
      <h2>我是消息</h2>
      <p>{id}---{name}</p>
    </>
  )
}

export default Message