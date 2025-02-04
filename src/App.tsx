import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./routers/Home/Home";
import Shop from "./routers/Shop/Shop";
import Product from "./routers/Product/Product";
import About from "./routers/About/About";
import ProductQuery from "./routers/ProductQuery/ProductQuery"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/shop',
      element:<Shop />
    },
    {
      path:'/product/:id',
      element:<Product />
    },{
      path:'/about',
      element:<About />
    },{
      path:'/query/:name',
      element:<ProductQuery />
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
