import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="ms-1">&copy; 2023 admin panel.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
