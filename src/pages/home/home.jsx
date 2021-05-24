import {useState} from 'react'
import Tab from './tab'
import './home.css'

function Home () {
  const [tab, setTab] = useState(true)

  const handleTab = () => {
    setTab(!tab)
  }

  return (
    <div>
      <button onClick={handleTab}>切换</button>
      <Tab tab={tab}></Tab>
    </div>
  )
}

export default Home
