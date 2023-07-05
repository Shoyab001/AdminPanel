import React, { useState } from 'react'

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
import { toast } from 'react-toastify'
import { Changepassword } from 'src/_services/auth.service'

const ChangePassword = () => {
  const [Inputvalues, setInputValues] = useState({})

  const onChangeInput = (e) => {
    e.preventDefault()
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      _id: '648fea4c5101f0086097b7b0',
      oldPassword: Inputvalues?.oldPassword,
      password: Inputvalues?.password,
      confirm_password: Inputvalues?.confirm_password,
    }
    Changepassword(body).then((response) => {
      if (response?.success) {
        toast.success('password has been changed')
      } else {
        toast.error(response?.message)
      }
    })
  }
  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Change Password</h1>
                    <p className="text-medium-emphasis">Change your account</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="old-password"
                        autoComplete="old-password"
                        onChange={(e) => {
                          onChangeInput(e)
                        }}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="new-password"
                        autoComplete="new-password"
                        onChange={(e) => {
                          onChangeInput(e)
                        }}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Confirm password"
                        autoComplete="Confirm password"
                        onChange={(e) => {
                          onChangeInput(e)
                        }}
                      />
                    </CInputGroup>

                    <div className="d-grid">
                      <CButton
                        color="success"
                        onClick={(e) => {
                          handleSubmit(e)
                        }}
                      >
                        Change Password
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default ChangePassword
