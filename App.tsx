import React from 'react';
import {ScrollView, View} from 'react-native';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import SampleComponent from './SampleComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
