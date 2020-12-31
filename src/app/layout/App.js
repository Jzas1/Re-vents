import React, { Fragment, useState } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/Navbar'
import { Route, useLocation } from 'react-router-dom'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/eventDetailed/EventDetailedPage'
import EventForm from '../../features/events/eventDashboard/eventForm/EventForm'
import Sandbox from '../../features/sandbox/Sandbox'

export default function App() {
    const { key } = useLocation()

    return (
        <Fragment>
            <Route exact path='/' component={HomePage} />
            <Route path={'/(.+)'} render={() => (
                <>
                    <NavBar />
                    <Container className="main">
                        <Route exact path='/events' component={EventDashboard} />
                        <Route exact path='/sandbox' component={Sandbox} />
                        <Route path='/events/:id' component={EventDetailedPage} />
                        <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
                    </Container>
                </>
            )} />
        </Fragment>
    )
}
