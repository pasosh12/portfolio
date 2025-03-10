import React from 'react'
import { IconContext } from 'react-icons'

type Props = {
    icon: React.ComponentType
    size: string
    color: string
}

export const Icon: React.FC<Props> = ({ icon, size, color }) => {
    const IconComponent = icon

    return (
        <IconContext.Provider value={{ size, color }}>
            <IconComponent />
        </IconContext.Provider>
    )
}