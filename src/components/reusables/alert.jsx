import { Button, Snackbar } from '@mui/material'
import {useContext, useState} from 'react'
import { GetCryptoState } from '../../context/cryptoContext'

const Alert = () => {
  const {alert,setAlert} = GetCryptoState()

  const handleClose=()=>{
    setAlert(false)
  }
  
  return (

<Snackbar open={alert} autoHideDuration={3000} 
onClose={handleClose}>
  <Alert
    onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    This is a success Alert inside a Snackbar!
  </Alert>
</Snackbar>
  )
}

export default Alert