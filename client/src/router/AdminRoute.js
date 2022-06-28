import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate} from "react-router-dom"
function AdminRoute({ children }) {
  const {user} = useSelector(state => state.authReducer);
return (
    <div>
        {user.role !== "user" ? children : <Navigate to="/" /> }
    </div>
  )
}

export default AdminRoute