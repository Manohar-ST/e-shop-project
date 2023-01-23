import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'

function Category(props) {
  return (
   <div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2 text-center">
    <div className="card">
        <div className="card-body bg-info text-light border border-light text-wrap text-capitalize">
            <NavLink to={`/products/${props.value}`} className="btn" > {props.value} </NavLink>
        </div>
    </div>
   </div>
  )
}

export default Category
