import React, { useMemo, useState, useEffect } from 'react'
import { cilPeople } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Table } from 'react-bootstrap'
import { declareresult } from 'src/_services/profile.service'
import {
  CFormSelect,
  CButton,
  CCard,
  CCardBody,
  CFormInput,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const DeclareResult = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <div style={{ borderBottom: '3px solid #3c4b64', padding: '10px', fontWeight: 'bold' }}>
            Filters
          </div>
        </CCardBody>
        <CCard style={{ margin: '10px' }}>
          <div style={{ padding: '20px' }}>
            <CRow>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Date</p>
                <CFormInput type="date" aria-describedby="exampleFormControlInputHelpInline" />
              </CCol>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Game</p>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    'select Game',
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                  ]}
                />
              </CCol>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Session</p>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    'Select Session',
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                  ]}
                />
              </CCol>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Pana</p>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    'Select Pana',
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                  ]}
                />
              </CCol>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Digit</p>
                <input type="text" placeholder="0000...." />
              </CCol>
            </CRow>
          </div>
          <br />
        </CCard>
      </CCard>

      <CCard>
        <CCardBody>
          <CRow>
            <CCol lg="4" md="6" className="mt-3 ">
              <div style={{ borderBottom: '3px solid #3c4b64', fontWeight: 'bold' }}>
                <CFormInput type="date" aria-describedby="exampleFormControlInputHelpInline" />
              </div>
            </CCol>
            <CCol lg={{ span: 4, offset: 4 }} md="6" className="mt-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                  aria-label="Search for..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">
                    Search
                  </button>
                </span>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
        <CCard style={{ margin: '10px' }}>
          <CRow>
            <CCol xs>
              <CCardBody>
                <CTable align="middle" className="mb-0 border" hover responsive bordered>
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
                  {/* <CTableBody>
                    {Table.map((item, index) => (
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
                  </CTableBody> */}
                </CTable>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
      </CCard>
    </>
  )
}

export default DeclareResult
