import{useRef} from 'react'
import {connect} from 'react-redux'
import {add_person, del_person_async} from '../../store/actions/person'

const PersonRedux = (props) => {
  const nameRef = useRef()
  const ageRef = useRef()

  const addPerson = () => {
    props.addPerson({id: Date.now().toString(), name: nameRef.current.value, age: ageRef.current.value})
  }

  const delPerson = () => {
    props.delPerson(nameRef.current.value)
  } 

  return (
    <>
      <h3>redux 中取出的 person 列表</h3>
      <input ref={nameRef} placeholder="姓名" />
      <input ref={ageRef} placeholder="年龄" />
      <button onClick={addPerson}>添加</button>
      <button onClick={delPerson}>删除</button>
      <ul>
        {
          props.persons.map(p => {
            return <li key={p.id}>{p.name}---{p.age}</li>
          })
        }
      </ul>
    </>
  )
}

export default connect(
  state => ({persons: state.personReducer}),
  {
    addPerson: add_person,
    delPerson: del_person_async
  }
)(PersonRedux)