import {  Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav'
import HomeScreen from './screens/HomeScreen'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {StationaryOrder} from '../src/actions/stationaryActions'
import LoginScreen from './screens/LoginScreen';

function App() {
 return (
   <>
    <Router>
      <Header />
      <main className= 'py-3'>
          <Container> 
            <Route path='/login' component={LoginScreen} exact />
            <Route path='/stationeryOrder' component ={StationaryOrder} exact/> 
            <Route path='/' component ={HomeScreen} exact/>
          </Container>
      </main>
      <Footer />
    </Router>  
   </>
 )
}

export default App;
