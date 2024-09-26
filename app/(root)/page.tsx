import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const page = async () => {

    const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox
               type="greeting"
               title='Welcome'
               user={loggedIn?.name||'Guest'}
               subtext='Access and manage your account and transactions efficiently'
               />
               <TotalBalanceBox
               accounts={[]}
               totalBanks={2}
               totalCurrentBalance={2346.50}
               />
            </header>
        </div>
        <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:234},{currentBalance:436.55}]}
        />
    </section>
  )
}

export default page