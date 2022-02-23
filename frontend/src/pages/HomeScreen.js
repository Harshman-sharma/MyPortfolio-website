import { Container } from 'react-bootstrap'
import DoneProjects from '../components/DoneProjects'
import FutureProjects from '../components/FutureProjects'
import Myinfo from '../components/myinfo'
import Achievements from '../components/achievements'

import axios from 'axios'

function HomeScreen() {


    return (



        <Container>

            <Myinfo />
            <br /><br />
            <DoneProjects />
            <br /><br />
            <FutureProjects />
            <br /><br />
            <Achievements/>

        </Container>





    )
}

export default HomeScreen