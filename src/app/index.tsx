/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { GlobalStyle } from '../styles/global-styles';
import MainLayout from './layouts/main-layout';
import { RoutesFix } from './routes';
//import MomentUtils from '@date-io/moment'; // use version 1.x
//import { MuiPickersUtilsProvider } from '@mui/material/pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider/LocalizationProvider';

export function App() {
  return (
    <BrowserRouter>
      {/*<MuiPickersUtilsProvider utils={MomentUtils}>  */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider dense maxSnack={3}>
          <Helmet
            titleTemplate="%s - React Boilerplate"
            defaultTitle="React Boilerplate"
          >
            <meta
              name="description"
              content="A React Boilerplate application"
            />
          </Helmet>
          <MainLayout>
            <RoutesFix />
          </MainLayout>
          <GlobalStyle />
        </SnackbarProvider>
      {/* </MuiPickersUtilsProvider> */} 
      </LocalizationProvider>
    </BrowserRouter>
  );
}
