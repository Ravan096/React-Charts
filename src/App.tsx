import {BrowserRouter as Router , Routes, Route} from  'react-router-dom';
import {Suspense, lazy} from 'react';
import "./styles/app.css"
import Header from './layouts/Header';
import Loader from './layouts/Loader';
const Chart= lazy(()=> import("./components/charts"));
const Home = lazy(()=>import("./components/Home"));

function App() {

  return (
    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chart' element={<Chart/>}/>

        </Routes>
      </Suspense>

    </Router>
  )
}

export default App
