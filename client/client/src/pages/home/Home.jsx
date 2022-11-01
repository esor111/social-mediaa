import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
import Share from '../../components/share/Share'
import './home.scss'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {


  return (
    <div className='home'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home
