import React from 'react'
import Child from './Child'

const Parent = () => {

    const personObj = {
        name: "Altaf",
        city: "Bidar"
    }

    const userObj = {
        name: "Rahul",
        city: "Mumbai"
    }
    return (
        <>
            <div className="parentContainer">
                <Child personObj={personObj} />
                <Child personObj={userObj} />
            </div>

        </>
    )
}

export default Parent