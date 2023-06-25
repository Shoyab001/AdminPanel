import {
  CCol,
  CCard,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormCheck,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import React from 'react'
const contactSetting = () => {
  return (
    <>
      <CCard className="pt-4">
        <div>
          <h5 style={{ borderBottom: '1px solid #aeaaaade', padding: '0rem 1rem 1rem 1rem ' }}>
            Contact Setting
          </h5>
        </div>

        <CForm className="row gx-3 gy-2 p-3 align-items-center">
          <CCol lg={4} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Mobile Number</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={4} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Mobile Number 2 (optional)</h6>{' '}
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={4} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>WhatsApp Number</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Landline Number 1 (optional)</h6>{' '}
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Landline Number" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Landline Number 2 (optional)</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Second Landline Number" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="inputEmail3">
              <h6>Email</h6>
            </CFormLabel>
            <CFormInput type="email" id="inputEmail3" placeholder="info@gmail.com" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>UPI Id</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="*********@paytm" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Telegram (Optional)</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Telegram Link" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Twitter (Optional)</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Twitter Link" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Youtube (Optional)</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Youtube Link" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Instagram (Optional)</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Instagram Link" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Address</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Notification</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" />
          </CCol>
          <CCol xs={12} className="p-2">
            <CButton type="submit">Submit</CButton>
          </CCol>
        </CForm>
      </CCard>
    </>
  )
}

export default contactSetting
