import React from 'react'

export default function Alert(props) {
  return (
    

   <div>
      
      props.alert && <div className={`alert alert-${props.alert.type} warning alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    </div>
  )
}
