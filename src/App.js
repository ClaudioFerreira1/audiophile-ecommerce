import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, CartModal, ScrollToTop } from './components'
import { Home, Headphones, Speakers, Earphones, SingleProduct, Checkout, Error } from './pages'

const App = () => {
  return (
    <Router>
      <ScrollToTop >
        <Navbar />
        <Sidebar />
        <CartModal />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/headphones'>
            <Headphones />
          </Route>
          <Route exact path='/speakers'>
            <Speakers />
          </Route>
          <Route exact path='/earphones'>
            <Earphones />
          </Route>
          <Route exact path='/product/:slug' children={<SingleProduct />} />
          {/* <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <Error />
        </Route> */}
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  )
}

export default App