import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Navbar from './components/NavBar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import {createBrowserRouter, createHashRouter, RouterProvider,} from "react-router-dom";

const myRouter =createHashRouter([


{path: "/" , element : <Layout /> ,children: [
  
  {index : true, element: <Home  />},
{path : "/Home" , element: <Home  />},
{path : "/" , element: <Home  />},
{path : "/About" , element: <About  />},
{path : "/Portfolio" , element: <Portfolio  />},
{path : "/Contact" , element: <Contact  />},
{path : "*" , element: <h1>404 Not Found</h1>},
] }

// {path : "/Home" , element: <Navbar  />},
// {path : "/" , element: <Home  />},
// {path : "/About" , element: <About  />},
// {path : "/Portfolio" , element: <Portfolio  />},
// {path : "/Contact" , element: <Contact  />},
// {path : "*" , element: <h1>404 Not Found</h1>},
])



function App() {

  return (
    <div className="App">

      <RouterProvider router={myRouter} />

    </div>
  );
}

export default App;
