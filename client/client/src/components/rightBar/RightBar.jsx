import axios from 'axios'
import { useEffect, useState } from 'react'
import './rightBar.scss'

const RightBar = () => {
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
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>

          {user
            .map(user => (
              <div className='user'>
                <div className='userInfo'>
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
              </div>
            ))
            .slice(0, 3)}
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          {user
            .map(user => (
              <div className='user'>
                <div className='userInfo'>
                  <img
                    src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt=''
                  />
                  <p>
                    <span>{user.username}</span> changed their cover picture
                  </p>
                </div>
                <span>1 day ago</span>
              </div>
            ))
            .slice(0, 5)}
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
              <div className='online' />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar

// import './rightBar.scss'
// import Rightmap from '../rightMap'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// const RightBar = () => {

//   const [user, setUser] = useState([])

//   useEffect(() => {
//     const getalluser = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8800/api/users`)
//         setUser(res.data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getalluser()
//   }, [])

//   return (
//     <div className='rightBar'>
//       <div className='container'>
//         <div className='item'>
//           <div className='user'>
//             {user.slice(0, 2).map(user => (
//               <>
//                 <div className='userInfo' key={user._id}>
//                   <img
//                     src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                     alt=''
//                   />
//                   <span>{user.username}</span>
//                 </div>
//                 <div className='buttons'>
//                   <button>follow</button>
//                   <button>dismiss</button>
//                 </div>
//               </>
//             ))}
//           </div>
//         </div>

//         <div className='item'>
//           <span>Latest Activities</span>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <p>
//                 <span>Jane Doe</span> changed their cover picture
//               </p>
//             </div>
//             <span>1 min ago</span>
//           </div>
//         </div>
//         <div className='item'>
//           <span>Online Friends</span>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//           <div className='user'>
//             <div className='userInfo'>
//               <img
//                 src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
//                 alt=''
//               />
//               <div className='online' />
//               <span>Jane Doe</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RightBar
