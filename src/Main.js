/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Header, Body, Title, Content } from 'native-base';
import Moment from 'moment';
import Article from './Article'
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state= {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`https://markitor.yakhdem.com/wp-json/wp/v2/posts?_embed`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading:false,
          posts:responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    
  }

  render() {
    if (this.state.isLoading==true) {
      return(
      <View style={{ flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
        <ActivityIndicator size="large"color="#1C97F7"/>
      </View>
      )
    }
    else{
      Moment.locale('en');    
      return (
        <Container>
  
          <Header androidStatusBarColor="#002e5b" style={{ backgroundColor: '#002e5b' }}>
            <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <Title>MARKITOR</Title>
            </Body>
          </Header>

          <Content>
            {this.state.posts.map((item, index) => (
              <Article item={item} key={index}></Article>
            ))}
          </Content>

        </Container>
      )
    }

  }
}
