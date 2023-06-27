import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  function add() {
    navigate('/addimage')
  }
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
            <CButton type="button" color="primary" style={{ marginBottom: '15px' }} onClick={add}>
              Add Image
            </CButton>

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
          </div>
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
                      <CTableHeaderCell>Image</CTableHeaderCell>
                      <CTableHeaderCell>Type</CTableHeaderCell>
                      <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {table.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-start" width="35px">
                          <p>1</p>
                        </CTableDataCell>
                        <CTableDataCell width="200px">
                          <img
                            src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
                            width="150px"
                          />
                        </CTableDataCell>

                        <CTableDataCell
                          style={{ fontSize: '30px', fontWeight: 'bold', color: 'green' }}
                          width="300px"
                          className="text-center"
                        >
                          Verified
                        </CTableDataCell>
                        <CTableDataCell
                          style={{ fontSize: '30px', fontWeight: 'bold', color: 'green' }}
                          width="300px"
                          className="text-center"
                        >
                          done
                        </CTableDataCell>
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
