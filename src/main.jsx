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
import Blog from './Components/Blog';
import ShowDetails from './Components/ShowDetails';
import MyToy from './Components/MyToy';
import PrivetRoute from './Components/PrivetRoute';
import Update from './Components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/regi",
        element: <Register></Register>
      },
      {
        path: "/addtoy",
        element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path: "/alltoy",
        element: <AllToy></AllToy>,
        loader: () => fetch(`https://assign11-server.vercel.app/toy`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: '/shaw/:id',
        element: <PrivetRoute>
          <ShowDetails></ShowDetails>
        </PrivetRoute>,
        loader: ({ params }) => fetch(`https://assign11-server.vercel.app/toy/h/${params.id}`)
      },
      {
        path: '/mytoy',
        element: <PrivetRoute>
          <MyToy></MyToy>
        </PrivetRoute>,
        loader: () => fetch(`https://assign11-server.vercel.app/toy`)
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assign11-server.vercel.app/toy/h/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderRouter>
    <RouterProvider router={router} />
  </ProviderRouter>
)
