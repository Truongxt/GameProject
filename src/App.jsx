import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; // Không cần BrowserRouter ở đây
import Header from './components/Header/Header';
import routers from './routers/routers';

function App() {
  return (
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
}

export default App;