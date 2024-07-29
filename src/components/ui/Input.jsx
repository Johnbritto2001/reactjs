import React from 'react'

const Input = ({ label, isRequired = false }) => {
    return (
        <label>
            <b>{label}</b>
            {isRequired == true ? <span className="danger">&nbsp;*</span> : null}
        </label>
    )
}

export default Input