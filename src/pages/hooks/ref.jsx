import { useRef } from "react"

function MyRef() {
  const myRef = useRef()

  const handleSubmit = () => {
    console.log(myRef.current.value);
  }

  return (
    <>
      <input type="text" ref={myRef} />
      <button onClick={handleSubmit}>获取表单数据</button>
    </>
  )
}

export default MyRef
