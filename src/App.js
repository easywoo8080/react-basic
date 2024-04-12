
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import InfluentFlow from './pages/ptn/InfluentFlow';
import Abac from './pages/itl/Abac';
import RootLayout from './components/layout/RootLayout'
import Header from './components/layout/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      {/* <Route path='주소' element={해당 주소 입력 시 출력될 컴포넌트} /> */}
      <Route path='/' element={<InfluentFlow />} />
      <Route path='Abac' element={<Abac />} />
      <Route path='ptn' element={<Abac />} />
      <Route path='mnt' element={<InfluentFlow />} />
      <Route path='mnt12' element={<Abac />} />
    </Route>
  )
)


function App() {
  return (
    <div className='App'>
      <Header>dfddt</Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
