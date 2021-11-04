import React from 'react';
import Products from '../components/Products'
import { Helmet } from 'react-helmet';
import initialState from '../initialState'
import MetaHead from '../components/MetaHead'

const meta = (
  <MetaHead
    title="Productos"
    description="Encuentra todos tus productos favoritos"
    image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
    url="https://mocafood.xyz/"
  />
);
const Home = () => {
  return(
    <>
    <Helmet>
      <title>Platzi Conf Merch</title>
      
    </Helmet>
    <Products products={initialState.products} />
    </>
   )
};

export default Home;
  