import './app.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import ProviderLoginContext from "./context/profile.context"
import HomePage from './pages/HomePage'
function App() {
 
  const picturesBanner = [
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png'
  ]

  const router = createBrowserRouter([
    {path: "/", element: <HomePage />}
  ])

  return (


    <ProviderLoginContext>
      <div className='container'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ProviderLoginContext>
  )
}

export default App
