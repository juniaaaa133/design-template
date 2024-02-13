import React from 'react'
import Navb from '../../Pages/Nav/Navb'
import { Outlet } from 'react-router'
import FooterX from '../../ELEMENTX/Ui/Footer/FooterX'

const Layout = () => {
  return (
<>
<Navb/>
<Outlet />
<FooterX />
</>
    )
}

export default Layout