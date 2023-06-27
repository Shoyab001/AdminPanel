import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilPhone, cilUser } from '@coreui/icons'

import { Container, Button, Form, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Signup } from '../../../_services/auth.service'
import { toast } from 'react-toastify'
// import Select from 'react-select'

import { Validator } from './signup.validator'

// import { Country, State, City } from 'country-state-city'

const Register = () => {
  const history = useNavigate()
  const [role, setRole] = useState('')
  const { id } = useParams()

  const [Signupdetail, setSignupdetails] = useState({})
  const [ErrorObject, setErrorObject] = useState({})
 

  useEffect(() => {
    if (id == '640ec4c5941ddd210c4dae93') {
      setRole('640ec4c5941ddd210c4dae93')
    } else if (id == '640ec4da941ddd210c4dae98') {
      setRole('640ec4da941ddd210c4dae98')
    } else if (id == '640ec4ec941ddd210c4dae9d') {
      setRole('640ec4ec941ddd210c4dae9d')
    } else if (id == '640ec508941ddd210c4daea7') {
      setRole('640ec508941ddd210c4daea7')
    } else {
      setRole('')
    }
  }, [])
  const onChangeInput = (e) => {
    e.preventDefault()
    setErrorObject({})
    setSignupdetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let result = Validator(Signupdetail)
    const { error } = result

    if (error) {
      const errorData = {}
      for (let item of error.details) {
        const name = item.path[0]
        const message = item.message
        errorData[name] = message
      }
      setErrorObject(errorData)
      window.scrollTo(100, 100)
      return
    }

    let body = {
      role: role,
      name: Signupdetail?.name,
      mobile_number: Signupdetail?.mobile_number,
      password: Signupdetail?.password,
      confirm_password: Signupdetail?.confirm_password,
    }
    Signup(body).then((response) => {
      if (response?.success) {
        toast.success('signup successfully')
        let data = response?.data
        let users = response?.data
        sessionStorage.setItem('role', users?._id)
        sessionStorage.setItem('token_key', data?.token)
        sessionStorage.setItem('users', JSON.stringify(users))
        history(`/`)
      } else {
        toast.error(response?.message)
      }
    })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      onChange={(e) => {
                        onChangeInput(e)
                      }}
                    />
                  </CInputGroup>
                  <span className="fs-6 text-danger mb-2">{ErrorObject?.name}</span>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>+91</CInputGroupText>
                    <CFormInput
                      placeholder="phone"
                      autoComplete="number"
                      onChange={(e) => {
                        onChangeInput(e)
                      }}
                    />
                  </CInputGroup>
                  <span className="fs-6 text-danger">{ErrorObject?.mobile_number}</span>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => {
                        onChangeInput(e);
                      }}
                    />
                  </CInputGroup>
                  <span className="fs-6 text-danger">{ErrorObject?.password}</span>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={(e) => {
                        onChangeInput(e);
                      }}
                    />
                  </CInputGroup>
                  <span className="fs-6 text-danger">{ErrorObject?.confirm_password}</span>
                  <div className="d-grid">
                    <CButton
                      color="success"
                      onClick={(e) => {
                        handleSubmit(e)
                      }}
                    >
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
