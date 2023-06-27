import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  CNavLink,
} from '@coreui/react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { CFormInput } from '@coreui/bootstrap-react'
import { Link } from 'react-router-dom'
import { Button } from '@coreui/coreui'

const table = [
  {
    user: {
      name: 'Yiorgos Avraamu',
      number: '01572 00000',
      new: true,
      registered: 'date',
    },

    points: { name: '10' },
  },
]

const UserManagment = () => {
  const navigate = useNavigate()
  function unapproved() {
    navigate('/unapproved')
  }
  return (
    <>
      <CForm className="row g-3">
        <CCol xs="auto">
          <CButton
            style={{ marginBottom: '20px' }}
            type="button"
            color="primary"
            onClick={unapproved}
          >
            Un-approved Users List
          </CButton>
          <p>Search with Name, Mobile number, Email, Wallet Balance OR Referral Code</p>
          <div className="input-group mb-3">
            <CFormInput
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
              <CTable align="middle" className="mb-0 border" hover responsive bordered>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell>Points</CTableHeaderCell>
                    <CTableHeaderCell className="text-center"> Registration Date</CTableHeaderCell>
                    <CTableHeaderCell>Betting</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Fund Manage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Change Password</CTableHeaderCell>

                    <CTableHeaderCell className="text-center">Active</CTableHeaderCell>
                    <CTableHeaderCell>View</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {table.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <p>1</p>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">{item.user.number}</div>
                      </CTableDataCell>

                      <CTableDataCell>{item.points.name}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.user.registered}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton component="input" type="button" color="dark" value="Yes" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton component="input" type="button" color="dark" value="No" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton component="input" type="button" color="dark" value="No" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton component="input" type="button" color="dark" value="Yes" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <a href="#">
                          <svg viewBox="0 0 1024 1024" fill="currentColor" width="2em" color="blue">
                            <path d="M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                          </svg>
                        </a>
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

export default UserManagment
