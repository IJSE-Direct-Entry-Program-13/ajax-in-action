import './App.css'
import {createBrowserRouter, Navigate, RouteObject, RouterProvider} from "react-router";
import Main from "./view/main/Main.tsx";
import Xhr from "./view/xhr/Xhr.tsx";
import Fetch from "./view/fetch/Fetch.tsx";
import JqueryAjax from "./view/jquery-ajax/JqueryAjax.tsx";

type Routes = RouteObject[];
const routes: Routes = [
  {
    index: true,
    element: <Navigate to='/main'/>
  },
  {
    path: 'main',
    Component: Main
  },
  {
    path: 'xhr',
    Component: Xhr
  },
  {
    path: 'fetch',
    Component: Fetch
  },
  {
    path: 'jquery-ajax',
    Component: JqueryAjax
  }
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />
}

export default App
