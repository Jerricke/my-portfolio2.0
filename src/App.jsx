import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';
import WorkLayout from './layouts/WorkLayout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work1 from './pages/Work1';
import Work2 from './pages/Work2';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="work" element={<WorkLayout />}>
        <Route path="PokemonApp" element={<Work1 />} />
        <Route path="Portfolio" element={<Work2 />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
