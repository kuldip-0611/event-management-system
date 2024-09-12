import React, {memo} from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center h-100">
    <Spinner animation="border" role="status" style={{width: '5rem', height: '5rem'}} />
  </div>
)

export default memo(Loader)
