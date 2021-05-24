import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Home from "./pages/home/home";
// import About from './pages/about/about'
// import RefExc from './pages/refExc(ref的使用)/RefExc'

import Loading from './components/Loading'
import MyNavLink from './components/MyNavLink'

const Home = lazy(() => import('./pages/home/home'))
const About = lazy(() => import('./pages/about/about'))
const RefExc = lazy(() => import('./pages/refExc(ref的使用)/RefExc'))
const Router = lazy(() => import('./pages/router'))
const Hooks = lazy(() => import('./pages/hooks/effect'))
const Ref = lazy(() => import('./pages/hooks/ref'))
const Redux = lazy(() => import('./pages/redux'))

class App extends React.Component {

  render() {
    return (
      <>
        <div>
          <MyNavLink to="/home">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/refExc">refExc</MyNavLink>
          <MyNavLink to="/router">Router</MyNavLink>
          <MyNavLink to="/hooks">Hooks</MyNavLink>
          <MyNavLink to="/ref">Ref</MyNavLink>
          <MyNavLink to="/redux">redux</MyNavLink>
        </div>
        <div>
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route path='/home' exact component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route path='/refExc' component={RefExc}></Route>
              <Route path="/router" component={Router} />
              <Route path="/hooks" component={Hooks} />
              <Route path="/ref" component={Ref} />
              <Route path="/redux" component={Redux} />
              <Redirect to="/home" />
            </Suspense>
          </Switch>
        </div>
      </>

    )
  }
}

export default App