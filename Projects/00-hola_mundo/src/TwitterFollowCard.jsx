import { useState } from 'react'

export function TwitterFollowCard({userName, children, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="Avatar del user" 
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span 
                        className='tw-followCard-infoUsername'> @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClasName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{textButton}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}