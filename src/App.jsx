import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; // Không cần BrowserRouter ở đây
import Header from './components/Header/Header';
<<<<<<< HEAD
import routers from './routers/routers';
=======
import { Routes, Route } from 'react-router-dom';
import routers from './routers/routers'; 
import { CartProvider } from './pages/Cart/CartContext.jsx';
// import { Suspense } from 'react';
>>>>>>> main

function App() {
  return (
<<<<<<< HEAD
    <div style={{ backgroundColor: 'rgb(236,236,236)', minHeight: '100vh' }}>
      <Header />
      <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div style={{ width: '80%', minHeight: '100vh' }}>
            <Routes>
              {routers.map((item, index) => (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              ))}
            </Routes>
          </div>
        </div>
      </Suspense>
    </div>
  );
=======
    <CartProvider>
      <div style={{backgroundColor: 'rgb(236,236,236)'}}>
        <Header></Header>
          {/* <Suspense fallback={<div>Loading</div>}> */}
          <div className="d-flex justify-content-center align-items-center my-3">
            <div className="" style={{width: '80%', height: '100vh'}}>
              <Routes>
                  {
                    routers.map((item, index) => {
                      return(
                        <Route 
                          path={item.path}
                          element = {<item.component/>}
                          key={index}
                        />
                      )
                    })
                  }
                </Routes>
              </div>
          </div>
          {/* </Suspense> */}
      </div>
    </CartProvider>
  )
>>>>>>> main
}

export default App;