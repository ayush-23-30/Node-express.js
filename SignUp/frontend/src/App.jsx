import Login from "./component/Login"
import SignUp from "./component/SignUp"
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 


function App() {
  const router = createBrowserRouter ([
    {
      path : "/",
      element : <Login/>
    }, {
      path : "/signUp", 
      element : <SignUp/>
    }
  ])
  

  return (
    <>
    <div className="bg-[#fae3e3] h-screen w-full">
    <RouterProvider router = {router} />

    </div>
    </>
  )
}

export default App
