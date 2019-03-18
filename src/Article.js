import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Card, CardItem, Text, Button, Left, Body } from 'native-base';
import Moment from 'moment';
import HTML from 'react-native-render-html';


class CardImage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let data = this.props.data;
    let CardImage;
    if(!data._embedded['wp:featuredmedia']){
      CardImage =             
        <CardItem>
          <Text>- No Image -</Text>
        </CardItem>
    }else{
      CardImage =               
        <CardItem>
        {data._embedded['wp:featuredmedia'].filter( element => element.id == data.featured_media).map((subitem, index) => (
            <Image source={{uri: subitem.media_details.sizes.medium.source_url}} style={{height: 200, width: 200, flex: 1}} key = {data.id}/>
            ))}
        </CardItem>
    }
    return CardImage
  }
}

export default class Article extends Component {

    constructor(props) {
        super(props);
      }

    render(){
        let item = this.props.item;
        return(
            <Card style={{flex: 0}} key = {item.id}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style = {{ fontSize: 24, fontWeight:'bold' }}>{item.title.rendered}</Text>
                    <Text note>Published on: {Moment(item.date).format('d MMM Y')}</Text>
                  </Body>
                </Left>
              </CardItem>

              <CardImage data={item}></CardImage>

              <CardItem>
                  <HTML html={item.content.rendered} imagesMaxWidth={Dimensions.get('window').width} />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Text>Author:</Text>
                    {item._embedded.author.filter( element => element.id ==item.author).map((subitem, index) => (
                    <Text key = {item.id}>{subitem.name}</Text>
                    ))}
                  </Button>
                </Left>
              </CardItem>
            </Card>
        )
    }
}