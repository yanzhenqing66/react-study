import { useState, lazy } from 'react'
import {Route, Switch} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

const News = lazy(() => import('./news'))
const Message = lazy(() => import('./message'))
const Chat = lazy(() => import('./chat'))

function Router(props) {
  const [user] = useState(
    {id: 1, name: 'zhangsan'}
  )
  const pushMessage = (id, name) => {
    props.history.push(`/router/message?id=${id}&name=${name}`)
  }

  const repalceChat = (id, name) => {
    props.history.replace('/router/chat', {id, name})
  } 

  return (
    <>
      <MyNavLink to={`/router/news/${user.id}/${user.name}`}>News</MyNavLink>
      <MyNavLink to={`/router/message?id=${user.id}&name=${user.name}`}>message</MyNavLink>
      <MyNavLink to={{pathname: '/router/chat', state:{id: user.id, name: user.name}}}>chat</MyNavLink>
      <button onClick={() => pushMessage(user.id, user.name)}>push进入message</button>
      <button onClick={() => repalceChat(user.id, user.name)}>replace进入chat</button>

      <Switch>
        <Route path="/router/news/:id/:name" component={News} />
        <Route path="/router/message" component={Message} />
        <Route path="/router/chat" component={Chat} />
      </Switch>
    </>
  )
}

export default Router