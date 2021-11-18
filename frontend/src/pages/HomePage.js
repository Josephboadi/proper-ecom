import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Carousel from 'react-material-ui-carousel';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
import { getRawProduct } from '../redux/actions/productAction';
const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, allProducts } = useSelector(
    (state) => state.allProducts
  );

  // console.log(allProducts);

  useEffect(() => {
    dispatch(getRawProduct());
  }, []);
  return (
    <main>
      {/* <Carousel> */}
      <Hero />
      {/* <Hero /> */}
      {/* </Carousel> */}
      <FeaturedProducts data={allProducts} />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
