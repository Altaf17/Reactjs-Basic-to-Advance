import { useState } from "react"


const Counter = () => {
    const [counts, setCounts] = useState(0)


    const handleAdd = () => {
        if (counts >= 20) {
            setCounts(0)
        } else {
            setCounts((count) => count + 1)
        }

    }
    const handleRemove = () => {
        if (counts <= 0) {
            setCounts(0)
        }
        else {
            setCounts((count) => count - 1)
        }

    }
    return (
        <>
            <h1>Simple React Counter App</h1>
            <h2>Counter Value : {counts}</h2>
            <button onClick={handleAdd}>Add Value +</button>
            <button onClick={handleRemove}>Remove Value -</button>
        </>
    )
}
export default Counter