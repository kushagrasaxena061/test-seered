import React from 'react'
import UserInfo from './components/UserInfo'
import Displaylist from './components/Displaylist'
import getCurrentUser from '@/app/actions/getCurrentUser'


const Page = async () => {  
  const currentUser = await getCurrentUser()
  return (
    <div>
      <UserInfo  currentUser={currentUser}/>
      <Displaylist/>
    </div>
  )
}

export default Page
