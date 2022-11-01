import './profile.scss'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Posts from '../../components/posts/Posts'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Profile = () => {
  const location = useLocation()
  const userId = location.pathname.split('/')[2]
  const [user, setUser] = useState('')
  const id = userId

  useEffect(() => {
    const getaUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users/${id}`)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getaUser()
  }, [])
  console.log(user)
  return (
    <div className='profile'>
      <div className='images'>
        <img
          src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className='cover'
        />
        <img
          src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
          alt=''
          className='profilePic'
        />
      </div>
      <div className='profileContainer'>
        <div className='uInfo'>
          <div className='left'>
            <a href='http://facebook.com'>
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <InstagramIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <TwitterIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <LinkedInIcon fontSize='large' />
            </a>
            <a href='http://facebook.com'>
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className='center'>
            <span>{user.username}</span>
            <div className='info'>
              <div className='item'>
                <PlaceIcon />
                <span>NEPAL</span>
              </div>
              <div className='item'>
                <LanguageIcon />
                <span>{user.email}</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts id={userId} />
      </div>
    </div>
  )
}

export default Profile
