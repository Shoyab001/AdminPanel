import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

const sliderImage = () => {
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
      <CCard>
        <CCardBody>
          <div style={{ borderBottom: '3px solid #3c4b64', padding: '10px', fontWeight: 'bold' }}>
            <CButton color="primary" style={{marginBottom:'15px'}}>Add Image</CButton>
            
            <div className="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search for..."
                aria-label="Search for..."
                style={{ width: '400px', marginRight: '20px' }}
              />
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">
                  Search
                </button>
              </span>
            </div>
          </div>
        </CCardBody>
        <CCard style={{ margin: '10px' }}>
          <CRow>
            <CCol xs>
              <CCardBody>
                <CTable
                  align="middle"
                  className="mb-0 border"
                  hover
                  responsive
                  bordered
                  borderColor="primary"
                >
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">
                        <CIcon icon={cilPeople} />
                      </CTableHeaderCell>
                      <CTableHeaderCell>Game Name</CTableHeaderCell>
                      <CTableHeaderCell>Result Date</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Open Pana</CTableHeaderCell>
                      <CTableHeaderCell>Close Pana</CTableHeaderCell>
                      <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {table.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                          <p>1</p>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div></div>
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>

                        <CTableDataCell></CTableDataCell>
                        <CTableDataCell className="text-center"></CTableDataCell>
                        <CTableDataCell></CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
      </CCard>
    </>
  )
}

export default sliderImage
