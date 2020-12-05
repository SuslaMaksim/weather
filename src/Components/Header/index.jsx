import React from 'react';
import './Header.scss'
import {Header} from "semantic-ui-react"


let AppHeader = (props)=>{


    return(
        <div className='header'>

            <Header className="header__title" as='h2' align = 'center'>Weather at Home :)</Header>

        </div>
    )
}

export default AppHeader;