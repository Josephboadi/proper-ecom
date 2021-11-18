import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';
// import Profile from '../components/User/Profile';
// import MyOrders from '../components/Order/MyOrders';
import OrderDetails from '../components/Order/OrderDetails';

const UpdateOrdersPage = () => {
  return (
    <main>
      <PageHero title="my order details" />
      <Wrapper className="page">
        <OrderDetails />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default UpdateOrdersPage;
