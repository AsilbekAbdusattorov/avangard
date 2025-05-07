import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/Mainlayout'

// Pages
import Home from './Pages/Home'
import KompaniyaHaqida from './pages/KompaniyaHaqida'
import Xizmatlar from './Pages/Xizmatlar'
import Mahsulotlar from './Pages/Mahsulotlar'
import NarxlarRoyhati1 from './Pages/NarxlarRoyhati1'
import Birja from './Pages/Birja'
import MaqolalarVaMaslahatlar from './Pages/MaqolalarVaMaslahatlar'
import Kontaktlar from './Pages/Kontaktlar'
import TolovShartlari from './Pages/TolovShartlari'
import YetkazibBerish from './Pages/YetkazibBerish'
import BizgaYozing from './Pages/BizgaYozin'
import Xizmat1 from './Pages/Xizmat1'
import Xizmat2 from './Pages/Xizmat2'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/Xizmatlar' element={<Xizmatlar/>} />
          <Route path='/KompaniyaHaqida' element={<KompaniyaHaqida/>} />
          <Route path='/Mahsulotlar' element={<Mahsulotlar/>} />
          <Route path='/NarxlarRoyhati1' element={<NarxlarRoyhati1/>} />
          <Route path='/Birja' element={<Birja/>} />
          <Route path='/MaqolalarVaMaslahatlar' element={<MaqolalarVaMaslahatlar/>}/>
          <Route path='/Kontaktlar' element={<Kontaktlar/>}/>
          <Route path='/TolovShartlari' element={<TolovShartlari/>}/>
          <Route path='/YetkazibBerish' element={<YetkazibBerish/>}/>
          <Route path='/BizgaYozing' element={<BizgaYozing/>}/>
          <Route path='/Xizmat1' element={<Xizmat1/>}/>
          <Route path='/Xizmat2' element={<Xizmat2/>}/>
          
      </Route>
    )
  )          


  return (
    <RouterProvider router={router} />
  )
}

export default App