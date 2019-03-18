import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image, I18nManager } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './src/Main';

I18nManager.forceRTL(false);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Markitor - L\'action d\'une vision',
    text:
      'MARKITOR business-angels - MARKITOR events - Markitor RH - Markitor Machinery & logistique - Markitor Agro - Markitor Solutions',
    icon: 'ios-images',
    image: require('./assets/logo.jpg'),
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'À la recherche d\'un consultant ?',
    text:
      'Nous travaillons depuis 2010 en partenariat avec des clients de tous secteurs.',
    icon: 'ios-options',
    image: require('./assets/logo.jpg'),
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'MARKITOR ASSESSMENT CENTER',
    text: 'Centre de développement de compétence - Nos solutions sur mesure pour la gestion des vos ressources humaines',
    icon: 'ios-beer',
    image: require('./assets/logo.jpg'),
    colors: ['#29ABE2', '#4F00BC'],
  },
];

class HomeScreen extends React.Component {
 

  _renderItem = props => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <Icon
        style={{ backgroundColor: 'transparent' }}
        name={props.icon}
        size={50}
        color="white"
      />
      <Image source={props.image} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        // bottomButton
        showPrevButton
        showSkipButton
        // hideNextButton
        // hideDoneButton
        onSkip={() => this.props.navigation.navigate('MainScreen')}
        onDone={() => this.props.navigation.navigate('MainScreen')}
      />
    );
  }
}



const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  MainScreen: {
    screen: MainScreen
  }
}, {
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
