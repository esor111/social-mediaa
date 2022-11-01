import './share.scss'
import Image from '../../assets/img.png'
import Map from '../../assets/map.png'
import Friend from '../../assets/friend.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'

const Share = () => {
  const [file, setFile] = useState(null)

  const userId = useSelector(state => state.user.currentUser)

  const [uShare, setShare] = useState()
  const { currentUser } = useContext(AuthContext)

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   const newPost = {
  //     userId: userId,
  //     desc: uShare
  //   }
  //   if (file) {
  //     const data = new FormData()
  //     const filename = Date.now() + file.name
  //     data.append('name', filename)
  //     data.append('file', file)
  //     newPost.image = filename
  //     try {
  //       await axios.post('/upload', data)
  //     } catch (err) {}
  //   }
  //   try {
  //     const res = await axios.post(`http://localhost:8800/api/mind/`, newPost)
  //     console.log(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const sharePost = async e => {
    e.preventDefault()

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'upload')
    try {
      const uploadres = await axios.post(
        'https://api.cloudinary.com/v1_1/djnqczafn/image/upload',
        data
      )
      const { url } = uploadres.data

      const newPost = {
        userId: userId,
        desc: uShare,
        image: url
      }
      const res = await axios.post(`http://localhost:8800/api/mind/`, newPost)
      console.log(res.data)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }

    // const newPost = {
    //   userId: userId,
    //   desc: uShare
    // }

    // try {
    //   const res = await axios.post(`http://localhost:8800/api/mind/`, newPost)
    //   console.log(res.data)
    // } catch (err) {
    //   console.log(err)
    // }
  }
  return (
    <div className='share'>
      <div className='container'>
        <div className='top'>
          {file && (
            <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
          )}
          <input
            type='text'
            placeholder={`What's on your mind?`}
            onChange={e => setShare(e.target.value)}
          />
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <input
              type='file'
              id='file'
              style={{ display: 'none' }}
              onChange={e => setFile(e.target.files[0])}
            />
            <label htmlFor='file'>
              <div className='item'>
                <img src={Image} alt='' />
                <span>Add Image</span>
              </div>
            </label>
            <div className='item'>
              <img src={Map} alt='' />
              <span>Add Place</span>
            </div>
            <div className='item'>
              <img src={Friend} alt='' />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className='right'>
            <button onClick={sharePost}>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
