import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';

const routes = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/login',
                    element: <Login />
               },
               {
                    path: 'registration',
                    element: <Register />
               }
          ]
     }
])

export default routes;