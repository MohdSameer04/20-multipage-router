import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';


                  // this was a old method 

// const routeOldMethod = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routeOldMethod)

              
              // NEW APPROACH FOR CREATING A ROUTER

// createBrowserRouter is a inbuilt packages with the help of that we can create router
const router = createBrowserRouter([
  {
    // Rooot Layout will consider as Parent router 
    path : '/',
    element : <RootLayout />,
    errorElement: <ErrorPage />,

    // inside children array which router present consider as a child router of the parent router
    children : [
      // setting all the path are the relative path 
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage />},
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ]
  },
  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
