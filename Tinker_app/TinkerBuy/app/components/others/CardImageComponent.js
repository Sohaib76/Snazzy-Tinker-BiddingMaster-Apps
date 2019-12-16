import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';
import { styles, styles2, GlobalConst, Icon, ShareComponent, ModalComponent, LabelTextComponent
       } from '../../config/imports';


export default class CardImageComponent extends Component<Props> {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles3.container}>
      <FlatList
        data={this.props.data}
        extraData={this.props.extraData}
        onRefresh={this.props.onRefresh}
        refreshing={this.props.refreshing}
        horizontal={this.props.viewRequired == 'horizontalScroll' ? true: false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>

          <View style={styles3.listCardContainer}>

          {this.props.viewRequired == 'row' ?
            <View style={styles3.directoryListings}>

              {this.props.showImage ?
                  <View style={styles3.row1}>
                    <Image
                      style={styles3.imageStyle3}
                      source={item.imageSource}
                    />
                  </View>
                : null
              }

              <View style={styles3.row2}>
                <View style={styles3.titleContainer}>
                  <LabelTextComponent label={'Seller '} text={item.sellerName} />
                  <LabelTextComponent label={'Receipt '} text={item.receiptNo} />
                  <LabelTextComponent label={'Price '} text={item.currency + item.price} />
                  <LabelTextComponent label={'Date '} text={item.date.substring(4, 21)} />
                </View>
              </View>

            </View>

            : null
          }

          {this.props.viewRequired == 'horizontalScroll' ?
            <TouchableOpacity style={[styles3.dummy, { width: 200 }]} onPress={() => navigate('ListingDescription', {title: item.title, image: item.imageSource, userTitle: item.userTitle, seller: item.seller, location: item.location})}>

              <View style={styles3.header}>
                <Text style={styles.normalText}>{item.title}</Text>
              </View>

              <View style={styles3.imageContainer2}>
                <Image source={item.imageSource} style={styles3.imageStyle2}/>
              </View>

              <View style={styles3.footerContainer}>
                <Text>{item.seller}</Text>
              </View>

            </TouchableOpacity>

            : null
          }


          {this.props.viewRequired == 'big' ?
            <View style={styles3.mainListings}>

              <TouchableOpacity style={styles3.header} onPress={() => navigate('ListingDescription', {name: item.name, imageUrl: item.imageUrl, userTitle: item.userName, seller: item.userName, market: item.market, status: item.status, price: item.price, website: item.website, currency: item.currency, language: item.language, date: item.date, description: item.description})}>
                <View style={styles3.titleContainer}>
                  <Text style={styles3.titleText}>{item.name}</Text>
                  <Text style={styles3.normalText}>Seller <Text style={styles3.smallText}>{item.userName}</Text></Text>
                  <Text style={styles3.normalText}>Market <Text style={styles3.smallText}>{item.language}</Text></Text>
                </View>
                <View style={[styles3.shareIconContainer, {backgroundColor: this.props.myProducts ? '#f2986f' : null}]}>
                  {this.props.SellerResultScreen ?
                    <TouchableOpacity style={styles.chatButton} onPress={() => navigate('ChatScreen', {name: item.userName, location: item.location})}>
                      <Text style={[styles.normalTextBold, {color: '#71a1ed'}]}>CHAT</Text>
                    </TouchableOpacity>
                  :
                    <Text style={styles3.statusText}>{item.status}</Text>
                  }
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles3.imageContainer} onPress={() => navigate('ListingDescription', {name: item.name, imageUrl: item.imageUrl, userTitle: item.userName, seller: item.userName, market: item.market, status: item.status, price: item.price, website: item.website, currency: item.currency, language: item.language, date: item.date, description: item.description})}>
                <Image
                  style={styles3.imageStyle}
                  source={{uri: item.imageUrl}}
                />
              </TouchableOpacity>

              <View style={styles3.footerContainer}>
                <View style={styles3.row2}>

                  <View style={styles.container}>
                    <Text style={[styles.normalTextBold, styles.black]} onPress={() => navigate('ProfileScreen', {name: item.userName, location: item.location})}>
                      {this.props.SellerResultScreen ?
                        item.price
                      :
                        item.userName
                      }
                    </Text>
                    <Text style={[styles.smallText, styles.darkGrey]}>
                      {item.description != undefined ? item.description.substring(0,100) + '...' : ''}
                    </Text>
                  </View>

                  <View style={[styles.container, {alignItems: 'flex-end'}]}>
                    <Text style={styles3.statusText}>{item.onlineProduct ? 'Online Product' : 'Offline Product'}</Text>
                  </View>

                </View>


                <View style={styles2.marginTop(15)}>
                  <Text style={[styles.smallTextBold, styles.black]}>{item.boughtNumber} people bought this</Text>
                </View>

                <View style={styles3.footerContainer2}>

                  <View style={[styles3.commentsIconContainer, styles.borders]}>
                    <ModalComponent iconName={'comments'} _flex={0.8} filter_1={'Comment 1'} filter_2={'Comment 2'}/>
                  </View>

                  <TouchableOpacity style={[styles3.likesIconContainer, styles.borders]}>
                    <Icon name="thumbs-up" color={'#71a1ed'} size={35}/>
                  </TouchableOpacity>

                  {this.props.SellerResultScreen ?
                    <TouchableOpacity style={[styles3.likesIconContainer, styles.borders, styles.justifyCenter]} onPress={() => navigate('BuyDetailScreen', {sellerName: this.props.seller})}>
                      <Text style={[styles.normalTextBold, {color: '#71a1ed'}]}>GET IT</Text>
                    </TouchableOpacity>
                  : null
                  }
                </View>

              </View>

            </View>

            : null
            }

          </View>
        }
      />
      </View>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
  },
  directoryListings:{
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  row1:{
    flex: 0.4,
    padding: 5
  },
  row2:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
  },
  mainListings:{
    flex: 1,
    flexDirection: 'column',
  },
  listCardContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adadad',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    marginVertical: 8,
    marginLeft: 10,
    marginRight: 16,
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  titleContainer:{
    flex: 0.9,
  },
  shareIconContainer:{
    flex: 0.5,
    alignItems: 'center',
    borderRadius: 5,
    padding: 5
  },
  imageContainer: {
    flex: 0.5,
    backgroundColor: 'grey',
  },
  footerContainer: {
    flex: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  footerContainer2: {
    flex: 0.2,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
  commentsIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesIconContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderLeftColor: '#adadad',
  },
  headerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    margin: 10,
  },
  userAvatar: {
    flex: 0.12,
    justifyContent: 'center',
  },
  titleDateContainer: {
    flex: 0.88,
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  imageStyle:{
    flex: 1,
    width: null,
    height: 150,
    resizeMode: 'stretch'
  },
  imageStyle2:{
    flex: 1,
    width: null,
    height: 150,
    resizeMode: 'stretch'
  },
  imageStyle3:{
    flex: 1,
    width: null,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 10
  },
  imageContainer2: {
    flex: 0.8,
  },
  chatButton: {
    backgroundColor: '#f7f7f7',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#000',
  },
  footerText: {
    fontSize: 15,
  },
  smallText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#727272',
  },
});
