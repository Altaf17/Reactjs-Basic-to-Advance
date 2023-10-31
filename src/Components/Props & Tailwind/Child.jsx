import React from 'react'

const Child = (props) => {
    const { name, city } = props.personObj // destructure
    console.log(props);
    return (
        <>
            <div className="childContainer card">
                <h1>Name : {name} </h1>
                <p>City : {city}</p>
            </div>
        </>
    )
}

export default Child