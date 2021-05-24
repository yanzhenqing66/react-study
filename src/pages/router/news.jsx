import { Fragment } from "react";

function News(props) {
  const {id, name} = props.match.params
  return (
    <Fragment>
      <h2>我是新闻</h2>
      <p>{id}---{name}</p>
    </Fragment>
  )
}

export default News