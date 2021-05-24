
function About() {
  const style = {
    container: {
      display: 'flex'
    },
    left: {
      width: '200px',
      height: '300px',
      background: 'blue'
    },
    right: {
      flexGrow: 1,
      height: '300px',
      background: 'yellow'
    }
  }
  
  return (
    <div style={style.container}>
      <div style={style.left}></div>
      <div style={style.right}></div>
    </div>
  )
}

export default About