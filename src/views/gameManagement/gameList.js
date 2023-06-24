import React from 'react'
import {
  CFormSelect,
  CAvatar,
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

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { CFormInput } from '@coreui/bootstrap-react'

const gameList = () => {
  const table = [
    {
      user: {
        name: 'Yiorgos Avraamu',
        number: '01572 00000',
        new: true,
        registered: 'date',
      },

      country: { name: 'USA' },

      credit: { name: '10000 INR' },

      amount: { name: '5000 INR' },
    },
  ]
  return (
    <>
      <CForm className="row g-3">
        <CCol xs="auto">
          <CButton
            style={{ marginBottom: '20px' }}
            component="input"
            type="button"
            color="primary"
            value="Add Game"
          />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              aria-label="Search for..."
              style={{ width: '400px', marginRight: '20px' }}
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">
                Search
              </button>
            </span>
          </div>
        </CCol>
      </CForm>
      <hr />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">#</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Game Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Open Time</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Close Time</CTableHeaderCell>
                    <CTableHeaderCell className="text-center"> Days</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Rate</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody></CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div>
        <h3>Game Rates</h3>
      </div>
      <CCard>
        <CCardHeader style={{ backgroundColor: '#3c4b64', color: 'white' }}>
          <h5>Game Rates</h5>
        </CCardHeader>
        <CForm className="row gx-3 gy-2 p-3 align-items-center">
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Single Digit</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Jodi Digit</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Single Pana</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Double Pana</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Triple Pana</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="+91" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Half Sangam</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="10000" />
          </CCol>
          <CCol lg={6} sm={3}>
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h5>Full Sangam</h5>
              <h6>Value:</h6>
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="100000" />
          </CCol>
        </CForm>
      </CCard>
    </>
  )
}

export default gameList
