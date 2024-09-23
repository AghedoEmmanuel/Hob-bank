import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const page = () => {

    const loggedIn = {firstName:'User',lastName:'JS',email:'user@example.com'}

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox
               type="greeting"
               title='Welcome'
               user={loggedIn?.firstName||'Guest'}
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