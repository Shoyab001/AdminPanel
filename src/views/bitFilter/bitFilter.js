import React, { useEffect, useState } from 'react'

import {
  CFormSelect,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import { getmastertablelist } from 'src/_services/profile.service'

const bitFilter = () => {
  const [BitFilter, setbitFilter] = useState([])

  useEffect(() => {
    getmastertablelist({
      length: 100,
      filter: {
        type: '648ab62a2a9cdc3b38da1f9c',
      },
    }).then((response) => {
      if (response?.success) {
        setbitFilter(response?.data?.records)
      }
    })
  }, [])

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
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Amount</p>
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  placeholder="00.."
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </CCol>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Game</p>
                <CFormSelect aria-label="Default select example">
                  <option>Choose role</option>
                  {BitFilter &&
                    BitFilter?.map((items, index) => {
                      return (
                        <>
                          <option value={items._id} key={index}>
                            {items.name}
                          </option>
                        </>
                      )
                    })}{' '}
                </CFormSelect>
              </CCol>
            </CRow>
          </div>
          <br />
        </CCard>
      </CCard>
      <br />
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
    </>
  )
}

export default bitFilter
