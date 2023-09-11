/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://yt3.googleusercontent.com/41HTkm3KF37RAslrb6Gf089t3Dpy8B5lrs212N-YYCwI8j2zHBWQe_FDQYJGhdLhssSFYgRvtQ=s176-c-k-c0x00ffffff-no-rj',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginTop: 20,
            }}
          />
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Gunawan Setia
            </Text>
            <Text>@gunawansetia 660 subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
