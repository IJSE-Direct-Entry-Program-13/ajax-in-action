import './App.css'
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router";

type Routes = RouteObject[];
const routes: Routes = [];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />
}

export default App
