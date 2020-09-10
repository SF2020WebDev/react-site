import React from 'react'

const Input = () => {
    return(
        <div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
            <input value={age} onChange={e => setAge(e.target.value)} placeholder="age" />
        </div>
    )
}

export default Input