import React from 'react'

import {
  CFormSelect,
  CButton,
  CCard,
  CCardBody,
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

import { Table } from 'react-bootstrap'

import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
const winning = () => {
  const table = [
    {
      user: {
        name: 'Yiorgos Avraamu',
        number: '01572 00000',
        new: true,
        date: '22/06/2001',
        time: '11:05 AM',
      },

      bid: { point: '20', number: '2' },
      winning: { point: '20' },
      market: { name: '	MILAN_MORNING_OPEN' },
      game: { name: 'single' },
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Details</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive bordered>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Bid Points</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Winning Points</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Market Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Game Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Bid number</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Date</CTableHeaderCell>
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
                        <div>{item.bid.point}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.winning.point}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.market.name}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">{item.game.name}</CTableDataCell>
                      <CTableDataCell className="text-center">{item.bid.number}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.user.time} | {item.user.date}
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

export default winning
