import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilExitToApp, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { render } from '@testing-library/react'
// import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate()

  const notLoggedIn = () => {
    let token_key = sessionStorage.getItem('token_key')
    console.log(token_key)
    // if (token_key) {
    //   return false
    // } else {
    //   return true
    // }
    return false
  }

  function Logout() {
    console.log('show something')
    sessionStorage.clear()
    // isLoggedIn = false
    navigate('/login')
  }

  return (
    <>
      {notLoggedIn() && Logout()}
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
          </CHeaderBrand>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/dashboard" component={NavLink}>
                Dashboard
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          <CHeaderNav>
            <CNavItem>
              <CNavLink onClick={Logout}>
                <CIcon icon={cilExitToApp} size="lg" />
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
        </CContainer>
        <CHeaderDivider />
        <CContainer fluid>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    </>
  )
}

// return <>{isLoggedIn == false ? notLoggedIn() : ''}</>
// return (
//   <>
//     <Body />
//   </>
// )

export default AppHeader
