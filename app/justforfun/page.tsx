
import React, { useCallback } from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import useRentModal from '../hooks/useRentModal'
import Test from './Test'
import Avatar from '../components/Avatar'
import Categories from '../components/navbar/Categories'

const Page = async () => {
  
  const currentUser = await getCurrentUser()
  
  return (
    <div>
      <div>
        page ka hai yeh profile/page <br />
        {currentUser?.id}
        <Avatar src={currentUser?.image}/>
      </div>
      <Test currentUser={currentUser}/>
      <Categories/>
      <div>
        
      </div>
      
    </div>
  )
}

export default Page


