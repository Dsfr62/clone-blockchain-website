import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home'
import SignInPage from './pages/signin'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/signin",
      element: <SignInPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
