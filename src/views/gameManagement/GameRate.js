import React, { useState } from 'react'

import {
  CFormSelect,
  CFormInput,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCollapse,
  CFormLabel,
  CForm,
} from '@coreui/react'
const GameRate = () => {
  const [counter, setCounter] = useState(1)

  return (
    <>
      <div>
        <h3>Game Rates</h3>
      </div>
      <CCard>
        <CCardHeader style={{ backgroundColor: '#3c4b64', color: 'white' }}>
          <h5>Game Rates</h5>
        </CCardHeader>
        <CForm className="row gx-3 gy-2 p-5 align-items-center">
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Single Digit</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Jodi Digit</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Single Pana</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Double Pana</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Triple Pana</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Half Sangam</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Full Sangam</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput type="number" placeholder="00" />
          </CCol>
        </CForm>
      </CCard>
    </>
  )
}

export default GameRate
