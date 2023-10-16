import Welcome from "../../components/welcome";
import Account from "../../components/account";
import './style.scss'

function UserLog() {

    const accounts = [
        {
            title: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            description: 'Available Balance'
        },
        {
            title: 'Argent Bank Savings (x6712)',
            amount: '$10,928.042',
            description: 'Available Balance'
        },
        {
            title: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            description: 'Current Balance'
        }
    ]
    
    return(
        <main className="bg-dark">
            <Welcome />
            <div>
                <h2 className="sr-only">Accounts</h2>
            </div>
            {accounts.map((list, index) => (
                <Account 
                    title={list.title}
                    amount={list.amount}
                    description={list.description}
                    key={index}
                />
            ))}
            
        </main>
    )
}

export default UserLog;