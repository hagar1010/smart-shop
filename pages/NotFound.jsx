import React from 'react'
const p1 = {
    fontSize: 50,
    color: "#555",
    marginBottom:30
}
const p2 = {
    fontSize: 30,
    color: "#aaa"
}
const container = {
    height: "100vh",
    backgroundColor: "#eee",
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center"
}

const NotFound = () => {
    return (
        <div style={container} >
            <p style={p1}>404 Not Found</p>
            <p style={p2}>Please check URL address</p>
        </div>
    )
}

export default NotFound