import React, { useState } from 'react'
import styles from '../../Styles/modules/dashboard.module.scss'
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
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const [visibleA, setVisibleA] = useState(false)

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

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
      <WidgetsDropdown />

      <CCard className="mb-4">
        <CCardBody>
          <div style={{ borderBottom: '3px solid #3c4b64', padding: '10px', fontWeight: 'bold' }}>
            MARKIT BIT DETAILS
          </div>
        </CCardBody>
        <CCard style={{ margin: '10px' }}>
          <div style={{ padding: '20px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#3c4b64' }}> Game Name</p>
            <CFormSelect
              aria-label="Default select example"
              options={[
                'Open this select menu',
                { label: 'One', value: '1' },
                { label: 'Two', value: '2' },
                { label: 'Three', value: '3', disabled: true },
              ]}
            />
            <br />
            <div className={styles.addNumber}>
              <input type="text" placeholder="0" style={{ width: '3%' }}></input>
              <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#3c4b64' }}>
                Market Amount{' '}
              </p>
            </div>
          </div>
        </CCard>
      </CCard>

      <CCard className="">
        <CCardBody>
          <div style={{ borderBottom: '3px solid #3c4b64', padding: '10px', fontWeight: 'bold' }}>
            TOTAL BIDS ON SINGLE ANK OF DATE 16-JUNE-2023
          </div>
        </CCardBody>
        <CCard style={{ margin: '10px' }}>
          <div style={{ padding: '20px' }}>
            <CRow>
              <CCol>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#3c4b64' }}> Game Name</p>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    'Open this select menu',
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                  ]}
                />
              </CCol>
              <CCol>
                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#3c4b64' }}> Session</p>
                <CFormSelect
                  aria-label="Default select example"
                  options={[
                    'Open this select menu',
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                  ]}
                />
              </CCol>
              <CCol>
                <CButton color="primary" style={{ width: 'inherit', marginTop: '45px' }}>
                  Get Detail
                </CButton>
              </CCol>
            </CRow>
          </div>
        </CCard>
      </CCard>

      <CRow>
        {cards.map((item, index) => (
          <>
            <CCol style={{ margin: '20px' }} xs={3}>
              <CCard>
                <CCardBody className="text-center" style={{ color: '#3c4b64' }}>
                  <h5 style={{ fontSize: '17px', fontWeight: 'bold' }}>Total Bids</h5>
                  <h5 style={{ fontSize: '40px' }}>{item.value.amount}</h5>
                  <p>Total Bid Amount</p>
                  <a style={{ backgroundColor: '#3c4b64', display: 'block', color: 'white' }}>
                    Ank 0
                  </a>
                </CCardBody>
              </CCard>
            </CCol>
          </>
        ))}
      </CRow>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Deposit Point</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center"></CTableHeaderCell>
                    <CTableHeaderCell>Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Created at</CTableHeaderCell>
                    <CTableHeaderCell> Action</CTableHeaderCell>
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
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>{item.amount.name}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.credit.name}</CTableDataCell>
                      <CTableDataCell>
                        <CButton color="light">Complated</CButton>
                        <CButton style={{ marginLeft: '10px' }} color="light">
                          Cancel
                        </CButton>
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

export default Dashboard
