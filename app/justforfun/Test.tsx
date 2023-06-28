'use client'

import React, { useCallback } from 'react'
import useRentModal from '../hooks/useRentModal'
import { SafeUser } from '../types'

interface NavbarProps {
  currentUser?: SafeUser | null
}


const Test: React.FC<NavbarProps> = ({
  currentUser
}) => {
  const rentModal  = useRentModal()

  const onRent = useCallback(() => {
    if (!currentUser) {
      return console.log('no user')
    }

    rentModal.onOpen();
  }, [ rentModal, currentUser]);
  return (
    <div>
      test
      <div className='text-red-600 font-bold tetx-3xl cursor-pointer' onClick={onRent}>TEST</div>
    </div>
  )
}

export default Test
