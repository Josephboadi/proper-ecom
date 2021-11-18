import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import LoginSignUp from './components/User/LoginSignUp';
import store from './redux/store';
import { loadUser } from './redux/actions/userAction';
import UserOptions from './components/layout/Header/UserOptions';
import { useSelector } from 'react-redux';
// import Profile from './components/User/Profile';
// import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import axios from 'axios';
// import Cart from './components/Cart/Cart';
import Payment from './components/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './components/Cart/OrderSuccess';
// import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';

import {
  Home,
  SingleProduct,
  Profile,
  UpdateProfile,
  Orders,
  UpdateOrders,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    const { data } = await axios.get('/api/v1/stripeapikey');

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  // {
  //   stripeApiKey && (
  //     <Elements stripe={loadStripe(stripeApiKey)}>
  //       <PrivateRoute exact path="/process/payment" component={Payment} />
  //     </Elements>
  //   );
  // }

  // window.addEventListener('contextmenu', (e) => e.preventDefault());

  return (
    <AuthWrapper>
      <Router>
        {isAuthenticated && <UserOptions user={user} />}

        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <PrivateRoute exact path="/process/payment" component={Payment} />
          </Elements>
        )}
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id" children={<SingleProduct />} />

          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute exact path="/account">
            <Profile />
          </PrivateRoute>

          <PrivateRoute exact path="/me/update">
            <UpdateProfile />
          </PrivateRoute>

          {/* <PrivateRoute exact path="/account" component={Profile} />

          <PrivateRoute exact path="/me/update" component={UpdateProfile} /> */}

          <PrivateRoute
            exact
            path="/password/update"
            component={UpdatePassword}
          />

          <Route exact path="/password/forgot" component={ForgotPassword} />

          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />

          <Route exact path="/login" component={LoginSignUp} />

          {/* <Route exact path="/cart" component={Cart} /> */}

          <PrivateRoute exact path="/shipping" component={Shipping} />

          <PrivateRoute exact path="/success" component={OrderSuccess} />

          {/* <PrivateRoute exact path="/orders" component={MyOrders} /> */}
          <PrivateRoute exact path="/orders">
            <Orders />
          </PrivateRoute>

          <PrivateRoute exact path="/order/confirm" component={ConfirmOrder} />

          {/* <PrivateRoute exact path="/order/:id" component={OrderDetails} /> */}
          <PrivateRoute exact path="/order/:id">
            <UpdateOrders />
          </PrivateRoute>
          {/* {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <PrivateRoute exact path="/process/payment" component={Payment} />
            </Elements>
          )} */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
