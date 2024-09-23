import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const page = () => {

    const loggedIn = {firstName:'User'}

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
    </section>
  )
}

export default page