import React from 'react'
import { LinearProgress } from '@mui/material';
export default function Loading() {
  return (
    <p className='w-1/2 text-center'>Loading... <LinearProgress></LinearProgress> </p>
  )
}
