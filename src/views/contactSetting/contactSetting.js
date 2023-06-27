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
    e.preventDefault()
    // if (!InputsValue?.name) {
    //   return setErrorObject({ name: 'Please provide name.' })
    // }
    createcontact(InputsValue).then((res) => {
      if (res.success) {
        toast.success('New contact created')
      } else {
        let { message } = res.data
        setErrorObject((prev) => ({ ...prev }))
      }
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
              <h6>Landline Number 1 (optional)</h6>{' '}
            </CFormLabel>
            <CFormInput id="specificSizeInputNumber" placeholder="Enter Landline Number" />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Landline Number 2 (optional)</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="Enter Second Landline Number"
              onChange={onChangeInputs}
              invalid={ErrorObject?.landline_2}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="inputEmail3">
              <h6>Email</h6>
            </CFormLabel>
            <CFormInput
              type="email"
              id="inputEmail3"
              placeholder="info@gmail.com"
              onChange={onChangeInputs}
              invalid={ErrorObject?.email}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>UPI Id</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="*********@paytm"
              onChange={onChangeInputs}
              invalid={ErrorObject?.upi_id}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Telegram (Optional)</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="Enter Telegram Link"
              onChange={onChangeInputs}
              invalid={ErrorObject?.telegram}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Twitter (Optional)</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="Enter Twitter Link"
              onChange={onChangeInputs}
              invalid={ErrorObject?.twitter}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Youtube (Optional)</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="Enter Youtube Link"
              onChange={onChangeInputs}
              invalid={ErrorObject?.youtube}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Instagram (Optional)</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              placeholder="Enter Instagram Link"
              onChange={onChangeInputs}
              invalid={ErrorObject?.instagram}
            />
          </CCol>
          <CCol lg={6} sm={3} className="mt-3">
            <CFormLabel htmlFor="specificSizeInputNumber">
              <h6>Address</h6>
            </CFormLabel>
            <CFormInput
              id="specificSizeInputNumber"
              onChange={onChangeInputs}
              invalid={ErrorObject?.address}
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
            />
          </CCol>
          <CCol xs={12} className="p-2">
            <CButton type="submit" onSubmit={onSubmit}>
              Submit
            </CButton>
          </CCol>
        </CForm>
      </CCard>
    </>
  )
}

export default ContactSetting
