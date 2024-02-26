import './app.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import ProviderLoginContext from "./context/profile.context"
import HomePage from './pages/HomePage'
import AnnouncementPage from './pages/AnnouncementPage'
import { useEffect } from 'react'
import CorretorPage from './pages/CorretorPage'
import Header from './componentes/Header'


function App() {
 

  useEffect(()=>{
    console.log("aaa")
  }, [])
  const router = createBrowserRouter([
    {path: "", element: <HomePage />},
    {path: "anuncio/:id", element: <AnnouncementPage />},
    {path:"/corretor_page", element: <CorretorPage />}
  ])

  return (

    <ProviderLoginContext>
      <div className='container'>
        <RouterProvider fallbackElement router={router}></RouterProvider>
      </div>
    </ProviderLoginContext>
  )
}

export default App;
