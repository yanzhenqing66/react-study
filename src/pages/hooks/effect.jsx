import { useState, useEffect } from "react"
import ReactDOM from 'react-dom'

function Effect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count+1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [count])

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <>
      <h2>计时器{count}</h2>
      <button onClick={unmount}>销毁组件</button>
    </>
  )
}

export default Effect