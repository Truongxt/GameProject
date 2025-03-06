import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '@components/Layout/Layout';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import routers from './routers/routers'; 
// import { Suspense } from 'react';

function App() {

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <MainLayout>
        {/* <Suspense fallback={<div>Loading</div>}> */}
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
        {/* </Suspense> */}
      </MainLayout>
    </>
  )
}

export default App;
