import React from 'react';
import {ScrollView, View} from 'react-native';
import PositionReactNative from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
