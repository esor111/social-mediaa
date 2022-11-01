import { useContext, useEffect, useState } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllcommentSuccess } from '../../redux/Comment'
const Comments = ({ postId }) => {
  const [comment, setComment] = useState([])
  const [cmnt, setDecs] = useState('')
  const [currentuser, setCurrentUser] = useState()
  const post = useSelector(state => state.post.post.postId)
  const dispatch = useDispatch()
  const rdcomment=useSelector(state=> state.comment.comment)
  const currentUser=useSelector(state=> state.user.currentUser)
  
  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/comment/${post}/getcomment`
        )
        setComment(res.data)
        dispatch(getAllcommentSuccess(res.data))
      } catch (err) {
        console.log(err)
      }
    }
    getComment()
  }, [post])

  useEffect(() => {
    const getPuser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users/635659d29d0bd44ffc3d3db3`
        )
        setCurrentUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPuser()
  }, [])
  const sendPost = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8800/api/comment/${post}`,
        { comment: cmnt, user: currentuser.username }
      )
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='comments'>
      <div className='write'>
        <img src={currentUser.profilePic} alt='' />
        <input
          type='text'
          placeholder='write a comment'
          onChange={e => setDecs(e.target.value)}
        />
        <button onClick={sendPost}>Send</button>
      </div>
      {rdcomment.map(comment => (
        <div className='comment'>
          <img
            src={
              comment.profilePicture
                ? comment.profilePic
                : 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600'
            }
            alt=''
          />
          <div className='info'>
            <span>{comment[0].user}</span>
            <p>{comment[0].comment}</p>
          </div>
          <span className='date'>1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments

// const comments = [
//   {
//     id: 1,
//     desc:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam',
//     name: 'John Doe',
//     userId: 1,
//     profilePicture:
//       'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 2,
//     desc:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam',
//     name: 'Jane Doe',
//     userId: 2,
//     profilePicture:
//       'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600'
//   }
// ]
