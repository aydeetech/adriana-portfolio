import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside'

const ExtraPages = () => {
  return (
    <div>
        <Aside>
            <Outlet />
        </Aside>
    </div>
  )
}

export default ExtraPages