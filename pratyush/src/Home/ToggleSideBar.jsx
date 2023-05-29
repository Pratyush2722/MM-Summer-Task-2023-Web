import React,  { useState} from 'react'
import SideBar from "./Sidebar"
const LogicalNot = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
            class="btn btn-primary mb-5">
          Toggle State
      </button>
      {toggle && (
      <SideBar/>
      )}
    </>
  )
}
export default LogicalNot