import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { ImageType } from 'src/_services/profile.service'

const AddImage = () => {
  const [TypeLists, setTypeLists] = useState([])
  const [RedirectLists, setRedirectLists] = useState([])

  useEffect(() => {
    ImageType({
      length: 100,
      filter: {
        type: '649025beda34eb1198637db9',
      },
    }).then((response) => {
      if (response?.success) {
        setTypeLists(response?.data?.records)
      }
    })
  }, [])

  useEffect(() => {
    ImageType({
      length: 100,
      filter: {
        type: '6490260bda34eb1198637dc5',
      },
    }).then((response) => {
      if (response?.success) {
        setRedirectLists(response?.data?.records)
      }
    })
  }, [])
  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Select Image
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="select Image" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Image Type
          </Form.Label>
          <Col sm={10}>
            <Form.Select aria-label="Default select example">
              <option>Choose Type</option>
              {TypeLists &&
                TypeLists?.map((items, index) => {
                  return (
                    <>
                      <option value={items._id} key={index}>
                        {items.name}
                      </option>
                    </>
                  )
                })}{' '}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Redirect Type
          </Form.Label>
          <Col sm={10}>
            <Form.Select aria-label="Default select example">
              <option>Choose Type</option>
              {RedirectLists &&
                RedirectLists?.map((items, index) => {
                  return (
                    <>
                      <option value={items._id} key={index}>
                        {items.name}
                      </option>
                    </>
                  )
                })}{' '}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Add New Image</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  )
}

export default AddImage
