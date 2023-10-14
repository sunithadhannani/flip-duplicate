import React from 'react'

export default function CompA(props) {
  return (
    <>
    <table  className="table"border={1} >
      <tr>
        <th>Name</th>
        <th>roll</th>
      </tr>
    {
      props.data.map((e,i)=>{
        return(
        <>
        <tr>
        <td>{e.name}</td>
        <td>{e.roll}</td>
        </tr>         
        </>  
        )
      })
    }
     </table>
    </>
  )
}