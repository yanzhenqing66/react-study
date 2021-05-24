import {ADD_PERSON, DEL_PERSON} from '../constant'

const initState = [{id: '001', name: '小明', age: 18}]
const personReducer = (preState=initState, action) => {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    case DEL_PERSON :
      return preState.filter(sta => sta.name !== data)
    default:
      return preState
  }
}

export default personReducer
