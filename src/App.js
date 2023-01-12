// libraries
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// utils
import screen from './utils/screenSize';

// pages
import About from './pages/About';

// components
import Navigation from './components/nav/Navigation';
import SideNav from './components/nav/SideNav';

// elements
import LoadingSpinner from './elements/LoadingSpinner';

// constants
import screenSizes from './constants/screenSizes';

// styles
import './App.css';
import './styles/index.scss';

const Resume = React.lazy(() => import('./pages/Resume'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const [screenSize, setScreenSize] = useState(screen());

  useEffect(() => {
      function updateScreenHandler() {
          setScreenSize(screen());
      }

      window.addEventListener('resize', updateScreenHandler);
      return () => {
          window.removeEventListener('resize', updateScreenHandler);
      };
  }, []);

  return (
    <div className="App">
        <Suspense fallback={<div className='full-page'><div className="center"><LoadingSpinner /></div></div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation screenSize={screenSize} />}>
                        <Route index element={<About />} />
                        <Route path="about" element={<About />} />
                        <Route path="resume" element={<Resume />} />
                        <Route path="contact" element={<Contact screenSize={screenSize} />} />
                        <Route path="*" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    { screenSize === screenSizes.LARGE && <SideNav /> }
    </div>
  );
}

export default App;
