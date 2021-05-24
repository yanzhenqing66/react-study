import {ADD_PERSON, DEL_PERSON} from '../constant'

export const add_person = data => ({type: ADD_PERSON, data})

export const del_person = data => ({type: DEL_PERSON, data})

export const del_person_async = data => {
  return dispatch => {
    setTimeout(() => {
      dispatch(del_person(data))
    }, 500);
  }
}