import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilApps, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Management',
    to: '/UserManagment',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },

  // {
  //   component: CNavItem,
  //   name: 'Profit/Loss',
  //   to: '/profitLoss',
  //   icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Wallet Management',
  //   to: '/walletManagment',
  //   icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Contact Setting',
    to: '/contactSetting',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payment Management',
    to: '/paymentManagment',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Slider Image',
    to: '/sliderImage',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Declare Result',
    to: '/DeclareResult',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bit Filter',
    to: '/betFilter',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Winning Detail',
    to: '/winning',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },

  // {
  //   component: CNavItem,
  //   name: 'Notice',
  //   to: '/notice',
  //   icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  // },

  {
    component: CNavGroup,
    name: 'Game Management',

    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Game List',
        to: '/gameList',
      },
      {
        component: CNavItem,
        name: 'Game Rate',
        to: '/gameRate',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'User',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
]

export default _nav
