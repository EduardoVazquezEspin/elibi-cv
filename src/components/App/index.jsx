import RotatingImage from '../RotatingImage'
import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>Holi mi nombre es Elibi</h1>
      <h2>También me conoceréis como famoso vampiro inventor de los pingüinos:</h2>
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
