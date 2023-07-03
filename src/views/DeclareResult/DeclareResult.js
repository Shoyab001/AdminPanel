import React, { useMemo, useState, useEffect } from 'react'
import styles from '../../Styles/modules/dashboard.module.scss'

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
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import {
  getTypeDropdown,
  declareresult,
  list,
  getmastertablelist,
} from 'src/_services/profile.service'
import { Form } from 'react-router-dom'

const DeclareResult = () => {
  const [ErrorObject, setErrorObject] = useState({})
  const [TableLists, setTableLists] = useState([])
  const [SessionLists, setSessionLists] = useState([])
  const [InputsValue, setInputsValue] = useState({})

  const [FilterData, setFilterData] = useState({
    role: '648ab62a2a9cdc3b38da1f9c',
  })
  const [resultlist, setresultlist] = useState([])
  const [depositresult, setDepositResult] = useState([])

  useEffect(() => {
    declareresult().then((response) => {
      console.log(response, 'response')
      if (response?.success) {
        setresultlist(response?.data?.records)
      }
    })
  }, [])

  useEffect(() => {
    getmastertablelist({
      length: 100,
      filter: {
        type: '648ab62a2a9cdc3b38da1f9c',
      },
    }).then((response) => {
      if (response?.success) {
        setTableLists(response?.data?.records)
      }
    })
  }, [])

  useEffect(() => {
    getmastertablelist({
      length: 100,
      filter: {
        type: '648809675115c82490f5cdf6',
      },
    }).then((response) => {
      if (response?.success) {
        setSessionLists(response?.data?.records)
      }
    })
  }, [])

  const onChangeFilter = (e) => {
    setFilterData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onChangeInputs = (e) => {
    setInputsValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrorObject({})
  }

  const cards = [
    {
      value: {
        amount: '0',
      },
    },
  ]

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
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>
                  Market Name
                </p>
                <CFormSelect
                  aria-label="Default select example"
                  name="Session"
                  invalid={ErrorObject?.game}
                  onChange={onChangeInputs}
                >
                  <option>Choose role</option>
                  {TableLists &&
                    TableLists?.map((items, index) => {
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
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Session</p>
                <CFormSelect
                  aria-label="Default select example"
                  name="game"
                  invalid={ErrorObject?.game}
                  onChange={onChangeInputs}
                >
                  <option>Choose Session</option>
                  {SessionLists &&
                    SessionLists?.map((items, index) => {
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
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Pana</p>
                <CFormInput type="number" placeholder="5" />
              </CCol>
              <CCol>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#3c4b64' }}>Digit</p>
                <CFormInput type="number" placeholder="0000...." />
              </CCol>
            </CRow>
          </div>
          <br />
        </CCard>
      </CCard>
      <br />
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
                    <CTableHeaderCell>Market Name</CTableHeaderCell>
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

export default DeclareResult
