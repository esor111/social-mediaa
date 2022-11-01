import './post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Trash from '@mui/icons-material/MoreHoriz'
import { Link } from 'react-router-dom'
import Comments from '../comments/Comments'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postIdSuccess } from '../../redux/ProductId'
import { useSelector } from 'react-redux'
import { getAllcommentSuccess } from '../../redux/Comment'
import { getuserSuccess } from '../../redux/crudUser'
import { deleteProductSuccess } from '../../redux/productRedux'
const Post = ({ post }) => {
  const product = useSelector(state => state.product.products)
  const [commentOpen, setCommentOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const PPost = useSelector(state => state.post.post.postId)
  const mee = useSelector(state => state.user.currentUser)

  let me_id = mee._id
  const dispatch = useDispatch()
  //TEMPORARY
  // const liked = false
  const [hello, setHello] = useState()
  const [username, setUsername] = useState([])
  const [postId, setPostId] = useState('')
  const [cmnt, setComment] = useState()

  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/comment/${PPost}/getcomment`,
          { comment: cmnt }
        )
        setComment(res.data)
      } catch (err) {}
    }
    getComment()
  }, [post])

  const likeHandler = async id => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/mind/likes/${id}`,
        {
          userId: me_id
        }
      )
      window.location.reload()
      console.log(res.data)
    } catch (err) {}
  }

  useEffect(() => {
    const getaUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users/postuser/${post.userId}`
        )
        setUsername(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getaUser()
  }, [])

  const deleteHandler = async post => {
    try {
      const res = await axios.delete(`http://localhost:8800/api/mind/${post}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const SharetheId = postId => {
    setCommentOpen(!commentOpen)
    setPostId(postId)
    dispatch(postIdSuccess({ postId }))
    console.log(postId)
  }
  return (
    <div className='post'>
      <div className='container'>
        <div className='user'>
          <div className='userInfo'>
            <Link to={`/profile/${post.userId}`}>
              <img
                src={
                  post.image
                    ? post.image
                    : 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                }
                alt=''
              />
            </Link>
            <div className='details'>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className='name'>
                  {username ? username.username : 'katty'}
                </span>
              </Link>
              <span className='date'>{post.userId}</span>
            </div>
          </div>
          {post.userId == me_id && (
            <button onClick={() => deleteHandler(post._id)}>delete</button>
          )}
        </div>
        <div className='content'>
          <p>{post.desc}</p>
          <img
            src={
              post.image
                ? post.image
                : 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
            }
            alt=''
          />
        </div>
        <div className='info'>
          <div className='item' onClick={() => likeHandler(post._id)}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {post.likes.length} Likes
          </div>
          <div
            className='item'
            // onClick={() => setCommentOpen(!commentOpen, post._id)}
            onClick={() => SharetheId(post._id)}
          >
            <TextsmsOutlinedIcon />
            {post.comment.length}
          </div>
          <div className='item'>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post._id} username={username} />}
      </div>
    </div>
  )
}

export default Post
