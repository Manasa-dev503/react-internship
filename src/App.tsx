import './App.css'
import React from 'react'
function App(){
  const mydetails = [
    {
    firstname : "manasa",
    lastname : "bathina",
    gender : "female"
  },
  {
    firstname : "kalyani",
    lastname : "gadde",
    gender : "female"
  },
  {
    firstname : "praveen",
    lastname : "gadde",
    gender : "male"
  }
]
  return(
  <>
  <table border={1}>
    <thead>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Gender</th>
    </thead>
    <tbody>
      {
        mydetails.map((a)=>{
          return <tr style={(a.gender==="female")?{backgroundColor:"pink"}:{backgroundColor:"lightblue"}}><td>{a.firstname}</td><td>{a.lastname}</td><td>{a.gender}</td></tr>
        })
      }
    </tbody>
    
  </table>
  




     

      </>
  )
}
export default App
