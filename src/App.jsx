import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { useContext } from 'react'
import { BioContext } from './context'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Loader from './Loader'



const App = () => {

  const {setMenu} = useContext(BioContext);
  document.body.style.backgroundColor = "orange"

  const [sidebar,setSidebar] = useState(true);
 useEffect(()=>{
  if(sidebar){
    setMenu(true)
  }
  else{
    setMenu(false)
  }
 })
 


  return (
      // <Suspense fallback={<Loader/>} >
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
// </Suspense>
  )
}

export default App
