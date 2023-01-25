import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>Holi mi nombre es Elibi</h1>
      <h2>También me conoceréis como famoso vampiro inventor de los pingüinos:</h2>
      <img src={process.env.PUBLIC_URL + '/images/emperorpenguin.webp'} alt='pingüinos' />
    </div>
  )
}

export default App
