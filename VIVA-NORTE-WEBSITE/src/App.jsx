import './app.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import ProviderLoginContext from "./context/profile.context"
import HomePage from './pages/HomePage'
import AnnouncementPage from './pages/AnnouncementPage'


function App() {
 

  const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/anuncio/:id", element: <AnnouncementPage />}
  ])

  return (

    <ProviderLoginContext>
      <div className='container'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ProviderLoginContext>
  )
}

export default App;
