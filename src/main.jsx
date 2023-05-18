import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import ProviderRouter from './Components/ProviderRouter';
import AddToy from './Components/AddToy';
import AllToy from './Components/AllToy';
import Error from './Components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/regi",
      element:<Register></Register>
     },
     {
      path:"/addtoy",
      element:<AddToy></AddToy>
     },
     {
      path:"/alltoy",
      element:<AllToy></AllToy>,
      loader:()=>fetch(`https://assign11-server.vercel.app/toy`)
     }
    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <ProviderRouter>
    <RouterProvider router={router} />
 </ProviderRouter>
)
