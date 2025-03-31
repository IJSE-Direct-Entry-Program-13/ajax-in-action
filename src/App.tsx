import './App.css'
import {createBrowserRouter, Navigate, RouteObject, RouterProvider} from "react-router";
import Main from "./view/main/Main.tsx";
import Xhr from "./view/xhr/Xhr.tsx";
import Fetch from "./view/fetch/Fetch.tsx";

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
  }
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />
}

export default App
