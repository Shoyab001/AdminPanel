import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { LoginPage } from 'src/_services/auth.service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Validation from './validation'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  const [InputsValue, setInputsValue] = useState({})
  const [ErrorObject, setErrorObject] = useState({
    mobile_number: '',
    password: '',
  })

  const history = useNavigate()

  const onChangeInputs = (e) => {
    setErrorObject({})
    setInputsValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const [IsLoading, setIsLoding] = useState(false)

  const handleLogin = (e) => {
    setErrorObject({})
    // setIsLoding(true)
    e.preventDefault()
    Validation(InputsValue, setErrorObject)
    if (ErrorObject.mobile_number || ErrorObject.password) {
      return
    }
    LoginPage(InputsValue).then((response) => {
      // setIsLoding(false)
      console.log(response)
      if (response?.data?.status) {
        toast.success('login success')
        let data = response?.data?.data
        let users = response?.data?.data
        localStorage.setItem('role', users?._id)
        localStorage.setItem('token_key', data.token)
        localStorage.setItem('users', JSON.stringify(data))
        dispatch({ type: 'login-success' })
        history('/dashboard')
      } else {
        setErrorObject((prev) => ({ ...prev, password: 'Invalid mobile_number or password.' }))
      }
    })
  }
  // console.log(InputsValue.mobile_number)
  // console.log(InputsValue.password)
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="mobile_number"
                        placeholder="mobile_number"
                        autoComplete="mobile_number"
                        invalid={ErrorObject?.mobile_number ? true : false}
                        onChange={(e) => {
                          onChangeInputs(e)
                          setErrorObject('')
                        }}
                      />
                      <CFormFeedback invalid> {ErrorObject?.mobile_number}</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="password"
                        autoComplete="current-password"
                        invalid={setErrorObject?.password}
                        onChange={(e) => {
                          onChangeInputs(e)
                          setErrorObject('')
                        }}
                      />
                      <CFormFeedback invalid> {ErrorObject?.password}</CFormFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={(e) => {
                            handleLogin(e)
                          }}
                          // disabled={IsLoading}
                        >
                          {' '}
                          {/* {IsLoading && <CSpinner />} */}
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Raddy </h2>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
