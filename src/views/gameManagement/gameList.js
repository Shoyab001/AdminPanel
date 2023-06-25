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
        opentime: '8:50pm',
        closetime: '10:50pm',
        new: true,
        day: 'Sunday',
      },
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
                <CTableBody>
                  {table.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <p>1</p>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <p>{item.user.name}</p>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.opentime}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.closetime}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.day}</div>
                      </CTableDataCell>{' '}
                      <CTableDataCell className="text-center">
                        <CButton color="success">Yes</CButton>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {' '}
                        <CButton color="success">Edit Game</CButton>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton color="danger">Delete</CButton>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton color="danger">Rates</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default gameList
