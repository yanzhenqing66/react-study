import {NavLink} from 'react-router-dom'

function MyNavLink(props) {
  return (
    <NavLink 
      activeStyle={{backgroundColor: '#f60', color: '#fff'}}
      style={{ margin: '0 20px'}} 
      {...props}>{props.children}</NavLink>
  )
}

export default MyNavLink