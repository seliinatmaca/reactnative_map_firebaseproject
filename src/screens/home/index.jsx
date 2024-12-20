import {SafeAreaView, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {Map} from 'iconsax-react-native';
import {useEffect, useState} from 'react';
import FloatActionButton from '../../components/uı/floatActionButton';
import CustomCallout from '../../components/map/customCallout';
import CustomMarker from '../../components/map/customMarker';
import {Colors} from '../../theme/color';
import Geolocation from '@react-native-community/geolocation';
import {DETAIL} from '../../utils/routes';

const Home = ({navigation}) => {
  const [currentPossition, setCurrentPossition] = useState(null);
  const [mapType, setMapType] = useState('standart');
  const Markers = [
    {
      coordinate: {
        latitude: 37.7841637,
        longitude: -122.4306717,
      },
      title: 'selinin pilavcısı',
      description: 'türkiyenin en iyi tavuk pilavı',
      point: '2.1',
    },
    {
      coordinate: {
        latitude: 37.787128,
        longitude: -122.4113466,
      },
      title: 'sevginin pilavcısı',
      description: 'türkiyenin en iyi tavuk pilavı',
      point: '5.0',
    },
    {
      coordinate: {
        latitude: 37.7841637,
        longitude: -122.4306717,
      },
      title: 'fahrinin pilavcısı',
      description: 'türkiyenin en iyi tavuk pilavı',
      point: '4.5',
    },
    {
      coordinate: {
        latitude: 37.7841637,
        longitude: -122.43067178,
      },
      title: 'gülcenin pilavcısı',
      description: 'türkiyenin en iyi tavuk pilavı',
      point: '3.1',
    },
  ];

  const changeMapType = () => {
    if (mapType === 'standart') setMapType('satellite');
    else {
      setMapType('standart');
    }
  };

  const getCurrentPosition = () => {
    console.log('çalıştı');
    Geolocation.getCurrentPosition(
      pos => {
        setCurrentPossition(pos.coords);
        console.log('posiiton', pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FloatActionButton
          onPress={() => changeMapType()}
          icon={
            <Map
              size={30}
              color={mapType == 'standart' ? Colors.BLACK : Colors.GREEN}
              variant={mapType == 'standart' ? 'Outline' : 'Bold'}
            />
          }
          customStyle={{
            right: 10,
            top: 20,
          }}
        />
        <MapView
          mapType={mapType}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: currentPossition?.latitude,
            longitude: currentPossition?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {Markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              description={marker.description}
              coordinate={marker.coordinate}>
              <CustomMarker />
              <Callout
                onPress={() => navigation.navigate(DETAIL, {item: marker})}>
                <CustomCallout
                  title={marker.title}
                  description={marker.description}
                  point={marker.point}
                />
              </Callout>
            </Marker>
          ))}
          <Marker
            title="Konumum"
            coordinate={{
              latitude: currentPossition?.latitude,
              longitude: currentPossition?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
