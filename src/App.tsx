import './App.css'
import {createBrowserRouter, Navigate, RouteObject, RouterProvider} from "react-router";
import Main from "./view/main/Main.tsx";

type Routes = RouteObject[];
const routes: Routes = [
  {
    index: true,
    element: <Navigate to='/main'/>
  },
  {
    path: 'main',
    Component: Main
  }
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />
}

export default App
