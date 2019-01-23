import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Questions from './Questions';

const Main = (props) => (
    <div className='fluid-container main'>
        <Switch>
            <Route exact path='/' component={() => <Home scrollLinkClicked={props.scrollLinkClicked} />} />
            <Route exact path='/:topicid' component={Questions} />
        </Switch>
    </div>
)

export default Main