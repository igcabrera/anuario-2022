import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function LayoutHome() {
  return (
    <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6'>
        <Sidebar />
        <div className='xl:col-span-5 bg-slate-200'>
            <Header />
            <div className='h-[100vh] overflow-y-scroll'>
                <Outlet />
            </div>
        </div>  
    </div>
    
    
  )
}
