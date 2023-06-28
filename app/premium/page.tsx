import React from 'react'
import UserInfo from './components/UserInfo'
import getCurrentUser from '@/app/actions/getCurrentUser'

const Page = async () => {  
  const currentUser = await getCurrentUser()
  return (
    <div>
      <UserInfo  currentUser={currentUser}/>
    </div>
  )
}

export default Page
