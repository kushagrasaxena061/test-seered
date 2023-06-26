import React, { useCallback } from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import useRentModal from '../hooks/useRentModal'
import Test from './Test'

const Page = async () => {
  
  const currentUser = await getCurrentUser()
  
  return (
    <div>
      <div>
        page ka hai yeh profile/page <br />
        {currentUser?.id}
      </div>
      <Test currentUser={currentUser}/>
    </div>
  )
}

export default Page
