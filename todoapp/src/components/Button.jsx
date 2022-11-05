
const Button = () => {
    const onClick = () => {
        console.log('click')
    }


  return (
    <button onClick={onClick}
    className="btn">Add Task</button>
  )
}

export default Button