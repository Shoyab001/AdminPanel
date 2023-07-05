import {
  CCol,
  CCard,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormCheck,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createcontact } from 'src/_services/profile.service'

const ContactSetting = () => {
  const [InputsValue, setInputsValue] = useState({})
  const [ErrorObject, setErrorObject] = useState({})

  const onChangeInputs = (e) => {
    setInputsValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    setErrorObject({})
  }
  const onSubmit = (e) => {
    console.log(InputsValue)
    e.preventDefault()

    createcontact(InputsValue).then((res) => {
      if (res.success) {
        toast.success('New contact created')
        console.log(res)
      } else {
        toast.error('Please try again')
        // let { message } = res.data
        setErrorObject((prev) => ({ ...prev }))
      }
      console.log(res)
    })
  }
  return (
    <>
      <CCard className="pt-4">
        <div>
          <h5 style={{ borderBottom: '1px solid #aeaaaade', padding: '0rem 1rem 1rem 1rem ' }}>
            Contact Setting
          </h5>
        </div>

        <CForm className="row gx-3 gy-2 p-3 align-items-center">
          <CCol lg={4} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Mobile Number</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="+91"
              onChange={onChangeInputs}
              invalid={ErrorObject?.mobile_number}
            />
          </CCol>
          <CCol lg={4} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Mobile Number 2 (optional)</h6>{' '}
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="+91"
              onChange={onChangeInputs}
              invalid={ErrorObject?.mobile_number_2}
            />
          </CCol>
          <CCol lg={4} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>WhatsApp Number</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="+91"
              onChange={onChangeInputs}
              invalid={ErrorObject?.whatsapp_number}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Notification</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              onChange={onChangeInputs}
              invalid={ErrorObject?.notification}
              style={{ paddingBottom: '5rem' }}
              placeholder="enter text here ......."
            />
          </CCol>
          <CCol xs={12} className="p-2">
            <CButton type="button" onClick={onSubmit}>
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CCard>
    </>
  )
}

export default ContactSetting
