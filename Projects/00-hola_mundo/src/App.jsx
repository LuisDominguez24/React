
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: "Miguel Angel",
        isFollowing: true
    },
    {
        userName: 'trump',
        name: "Miguel Angel",
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: "Miguel Angel",
        isFollowing: false
    },
    {
        userName: 'luisd',
        name: "Miguel Angel",
        isFollowing: true
    },
]

export function App (){
    
    return (
        <section>
        {
            users.map(user => {
            const {userName, name, isFollowing} = user
            return(
                <TwitterFollowCard
                    key={userName}
                    userName={userName} 
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
            })
        }
        </section>
    )
}