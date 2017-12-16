import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; //comunnication glue between react-redux
import { createStore } from 'redux';
import reducers from './reducer';
import { Header } from './component/common';
import LibraryList from './component/LibraryList';

const  App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
