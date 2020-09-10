import React from 'react'

const Input = () => {
    return(
        <div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
        </div>
    )
}

export default Input