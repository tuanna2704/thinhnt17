import React from 'react'
import { useSelector } from "react-redux";

function ListItems() {
    const data = useSelector(state => state.items)
    console.log(data)
  return (
    <div>dd</div>
  )
}

export default ListItems