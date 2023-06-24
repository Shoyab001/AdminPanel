import {
  CCol,
  CRow,
  CCardHeader,
  CCardBody,
  CCard,
  CTableDataCell,
  CTableRow,
  CTableHeaderCell,
  CTable,
  CTableHead,
  CTableBody,
  CButton,
} from '@coreui/react'
import React from 'react'
const paymentManagment = () => {
  const table = [
    {
      user: {
        name: 'Yiorgos Avraamu',
        number: '01572 00000',
        amount: '1000',
        new: true,
        date: '22/06/2001',
        time: '11:05 AM',
        requestno: '150',
        remark: 'Gpay | Paytm | Phonepay',
        status: 'Success',
      },
    },
  ]
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <h4 className="p-3 pb-0">Withdraw Request List</h4>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive bordered>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">#</CTableHeaderCell>
                    <CTableHeaderCell>User Name</CTableHeaderCell>
                    <CTableHeaderCell>Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Request No.</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Remark</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {table.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <p style={{margin:'0px'}}>1</p>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <p style={{margin:'0px'}}>{item.user.number}</p>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <p style={{margin:'0px'}}>{item.user.amount}</p>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.requestno}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.remark}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.date}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        {' '}
                        <CButton color="success">{item.user.status}</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <h4 className="p-3 pb-0">Deposit Request List</h4>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive bordered>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">#</CTableHeaderCell>
                    <CTableHeaderCell clasName="text-center">Date</CTableHeaderCell>
                    <CTableHeaderCell clasName="text-center">Mobile</CTableHeaderCell>
                    <CTableHeaderCell clasName="text-center">Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Remark</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody></CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default paymentManagment
