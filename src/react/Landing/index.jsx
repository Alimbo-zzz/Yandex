import {
  Intro,
  Part,
  Events,
  Info,
  Footer,
} from './sections';

function App() {

  return (
    <>
      <div className="wrapper">
        <Intro />
        <Part />
        <Events />
        <Info />
        <Footer />
      </div>
    </>
  )
}

export default App
