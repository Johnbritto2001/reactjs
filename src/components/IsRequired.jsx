import React from 'react'

const IsRequired = ({ label, isRequired = false }) => {
  debugger
  return (
    <label className=''>
      <b>{label}</b>
      {isRequired == true ? <span>*</span> : null}
    </label>
  )
}

export default IsRequired
