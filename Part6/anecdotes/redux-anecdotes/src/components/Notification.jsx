import { useSelector , useDispatch } from "react-redux"
const Notification = () => {

  const anecdotes = useSelector(state => state.anecdote)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
     
    </div>
  )
}

export default Notification