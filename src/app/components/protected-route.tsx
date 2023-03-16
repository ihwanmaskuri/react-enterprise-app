import React from 'react';
//import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { saveClaimsAction } from 'features/auth/authSlice';
import { ClaimsType } from 'models/claims-type';

//Declare interface  for parameter ProtecedRoute
interface PropsRoute{
  props:RouteProps
}
const ProtectedRoute =(props:PropsRoute) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  if (!token) {
    localStorage.clear();
    return <Navigate to={{ pathname: '/login' }} />;
  }

  const decoded: ClaimsType = jwt_decode(token);
  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();
  const isValid = dateNow <= expiresAt;
  dispatch(saveClaimsAction(decoded));

  return isValid ? (
    <Route {...props} />
  ) : (
    <Navigate to={{ pathname: '/login' }} />
  );
};

export default ProtectedRoute;
