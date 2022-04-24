import React from "react";
import './List.scss'

function Index ({list}) {

  return (
    <>
      {
        list.map(item => {
          return (
            <li className="list-item" key={item.id}>{item.name}</li>
          )
        })
      }
    </>
  )
}

export default Index