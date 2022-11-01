import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../post/Post'
import './posts.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSuccess } from '../../redux/productRedux'

const Posts = ({ id }) => {
  const userId = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch()
  //TEMPORARY
  const [post, setPost] = useState([])
  const [user, setForuser] = useState([])

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/mind')
        setPost(res.data)
        dispatch(getProductSuccess(res.data))
      } catch (err) {}
    }
    getPost()
  }, [])

  let userIdd = id

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/mind/timeline/all/${userIdd}`
        )
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPost()
  }, [id])

  // const posts = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     userId: 1,
  //     profilePic:
  //       'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     img:
  //       'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Doe',
  //     userId: 2,
  //     profilePic:
  //       'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     desc:
  //       'Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.'
  //   }
  // ]

  return (
    <div className='posts'>
      {post.map(post => (
        <Post post={post} key={post.id} lal={post} />
      ))}
    </div>
  )
}

export default Posts
