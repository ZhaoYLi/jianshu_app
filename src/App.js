import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
// import Detail from './pages/detail';
import Detail from './pages/detail/loadable';
import Hoc from './pages/hoc'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/hoc' exact component={Hoc}></Route>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
