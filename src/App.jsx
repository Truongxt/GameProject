import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import routers from './routers/routers'; 
// import { Suspense } from 'react';

function App() {

  return (
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
  )
}

export default App;
