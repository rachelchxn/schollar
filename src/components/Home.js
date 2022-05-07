import illustration from './images/home-illustration.svg'
import { useHistory } from 'react-router-dom'

const Home = () => {

  let history = useHistory()

  function goToBasics() {
    history.push('/basic-personal-finance')
    window.location.reload()
  }

  return (
    <div className="body">
        <div className='hero'>
            <div>
                <h2 className='hero-text'>
                    Save your dollars with Schollar.
                </h2>
                <h3 className='hero-subtitle'>Learn the fundamental financial skills you need to succeed in post-secondary and beyond.</h3>
                <button onClick={goToBasics}>Get Started!</button>
            </div>
            <img src={illustration} className='hero-illustration' />

        </div>
    </div>
  )
}

export default Home