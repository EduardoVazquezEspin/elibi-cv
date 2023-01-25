import RotatingImage from '../RotatingImage'
import './App.css'
import { spanish as strings } from '../../resources/strings'

function App () {
  return (
    <div className='App'>
      <h1>{strings.get('main-title')}</h1>
      <h2>{strings.get('penguin-achievements')}</h2>
      <RotatingImage
        srcList={[process.env.PUBLIC_URL + '/images/emperorpenguin.webp',
          process.env.PUBLIC_URL + '/images/pinguinos2.jpg',
          process.env.PUBLIC_URL + '/images/pinguinos3.jpg',
          process.env.PUBLIC_URL + '/images/pinguinos4.jpeg',
          process.env.PUBLIC_URL + '/images/pinguinos5.jpg'
        ]}
        alt='pingüinos'
      />
    </div>
  )
}

export default App
