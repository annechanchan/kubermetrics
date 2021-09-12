import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import HomePage from '../pages/home/index.js'
import MetricsPage from '../pages/metrics/index.js'
import AlertsPage from '../pages/alerts/index.js'
import { Switch, Route } from 'react-router-dom';
import NavRoutes from '../components/NavRoutes/index.js';

import NavBar from '../components/navbar/index.js'

// import {
//   BrowserRouter, // root Component which renders the children routes
//   Route, // individual child components responsible for rendering the UI based on user's input location matching the defined path in <Route>
//   Link // used to navigate amongst the internal routes in our router app, think anchor tags
// } from 'react-router-dom'


const mapStateToProps = state => ({
  pods: state.pods.pods
})

const mapDispatchToProps = dispatch => ({
  click: async () => {
    let pods = await actions.fetchPods()
    dispatch(actions.getPods(pods))
  }
})

// class App extends React.Component {
//   render () {
//     console.log(this.props)

//     return (
//       <div>
//         <HomePage state={{...this.props}}/>
//         <button onClick={this.props.click}></button>
//       </div>
//     )
//   }
// }


// const App = () => (
//   <BrowserRouter>
//   <div>
//     <ul>
//       <li><Link to='/'>Home</Link></li>
//       <li><Link to='/metrics'>Metrics</Link></li>
//       <li><Link to='/alerts'>Alerts</Link></li>
//     </ul>
//     <Route exact path='/' component={HomePage}/>
//     <Route path='/metrics' component={MetricsPage}/>
//     <Route path='/alerts' component={AlertsPage}/>
//   </div>
//   </BrowserRouter>
// )


// export default connect(mapStateToProps, mapDispatchToProps)(App);

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        {NavRoutes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
