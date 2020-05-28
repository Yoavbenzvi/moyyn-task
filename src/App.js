import React from 'react';
import MainNavigation from './components/Navigation/MainNavigation';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Spacer from './components/Spacer/Spacer';

const App = () => {
  return (
    <div className="">
      <MainNavigation />
   	<Form />
   	<Spacer />
   	<Footer />
    </div>  
  );
}

export default App;
