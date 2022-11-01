import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Rightmap = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getalluser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users`)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getalluser()
  }, [])
  return (
    <div className='item'>
      <div className='user'>
        {user
          .slice(0, 2)
          .map((user) => (
            <>
              <div className='userInfo' key={user._id}>
                <img
                  src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
                <span>{user.username}</span>
              </div>
              <div className='buttons'>
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </>
          ))
          }
      </div>
    </div>
  )
}

export default Rightmap
