import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar";
import TotalbalanceBox from "@/components/TotalbalanceBox";
import React from "react"

const Home = () => {
    const loggedIn = { firstName: 'Adrian', lastName: 'JSM', email: 'contact@jsmastery.pro' };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage you account and transactions efficiently"
                    />

                <TotalbalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.50}
                />  
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:123.50}, 
                    {currentBalance:500}]}
            />
        </section>
    )
}

export default Home