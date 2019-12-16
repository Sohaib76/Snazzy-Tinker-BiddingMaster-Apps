import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { GlobalConst, Icon } from '../../config/imports';


export default class LanguageScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      languageId: '',
      data: []
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cashback : $24.95',
      headerRight: (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.toggleDrawer() }>
          <Icon name="navicon" color={'#71a1ed'} size={40}/>
        </TouchableOpacity>
      ),
      headerLeft: (
        <Image
          style={styles.imageStyle3}
          source={require('../../photos/logo.png')}
          fadeDuration={0}
        />
      ),
    };
  };

  componentDidMount(){
    this.setState({
      data: [
        {name: 'Acholi'}, {name: 'Afrikaans'}, {name: 'Akan'}, {name: 'Albanian'}, {name: 'Amharic'}, {name: 'Arabic'}, {name: 'Ashante'}, {name: 'Asl'}, {name: 'Assyrian'}, {name: 'Azerbaijani'}, {name: 'Azeri'}, {name: 'Bajuni'}, {name: 'Basque'}, {name: 'Behdini'}, {name: 'Belorussian'}, {name: 'Bengali'}, {name: 'Berber'}, {name: 'Bosnian'}, {name: 'Bravanese'}, {name: 'Bulgarian'}, {name: 'Burmese'}, {name: 'Cakchiquel'}, {name: 'Cambodian'}, {name: 'Cantonese'}, {name: 'Catalan'}, {name: 'Chaldean'}, {name: 'Chamorro'}, {name: 'Chao-chow'}, {name: 'Chavacano'}, {name: 'Chin'}, {name: 'Chuukese'}, {name: 'Cree'}, {name: 'Croatian'}, {name: 'Czech'}, {name: 'Dakota'}, {name: 'Danish'}, {name: 'Dari'}, {name: 'Dinka'}, {name: 'Diula'}, {name: 'Dutch'}, {name: 'Edo'}, {name: 'English'}, {name: 'Estonian'}, {name: 'Ewe'}, {name: 'Fante'}, {name: 'Farsi'}, {name: 'Fijian Hindi'}, {name: 'Finnish'}, {name: 'Flemish'}, {name: 'French'}, {name: 'French Canadian'}, {name: 'Fukienese'}, {name: 'Fula'}, {name: 'Fulani'}, {name: 'Fuzhou'}, {name: 'Ga'}, {name: 'Gaddang'}, {name: 'Gaelic'}, {name: 'Gaelic-irish'}, {name: 'Gaelic-scottish'}, {name: 'Georgian'}, {name: 'German'}, {name: 'Gorani'}, {name: 'Greek'}, {name: 'Gujarati'}, {name: 'Haitian Creole'}, {name: 'Hakka'}, {name: 'Hakka-chinese'}, {name: 'Hausa'}, {name: 'Hebrew'}, {name: 'Hindi'}, {name: 'Hmong'}, {name: 'Hungarian'}, {name: 'Ibanag'}, {name: 'Ibo'}, {name: 'Icelandic'}, {name: 'Igbo'}, {name: 'Ilocano'}, {name: 'Indonesian'}, {name: 'Inuktitut'}, {name: 'Italian'}, {name: 'Jakartanese'}, {name: 'Japanese'}, {name: 'Javanese'}, {name: 'Kanjobal'}, {name: 'Karen'}, {name: 'Karenni'}, {name: 'Kashmiri'}, {name: 'Kazakh'}, {name: 'Kikuyu'}, {name: 'Kinyarwanda'}, {name: 'Kirundi'}, {name: 'Korean'}, {name: 'Kosovan'}, {name: 'Kotokoli'}, {name: 'Krio'}, {name: 'Kurdish'}, {name: 'Kurmanji'}, {name: 'Kyrgyz'}, {name: 'Lakota'}, {name: 'Laotian'}, {name: 'Latvian'}, {name: 'Lingala'}, {name: 'Lithuanian'}, {name: 'Luganda'}, {name: 'Luo'}, {name: 'Maay'}, {name: 'Macedonian'}, {name: 'Malay'}, {name: 'Malayalam'}, {name: 'Maltese'}, {name: 'Mandarin'}, {name: 'Mandingo'}, {name: 'Mandinka'}, {name: 'Marathi'}, {name: 'Marshallese'}, {name: 'Mien'}, {name: 'Mina'}, {name: 'Mirpuri'}, {name: 'Mixteco'}, {name: 'Moldavan'}, {name: 'Mongolian'}, {name: 'Montenegrin'}, {name: 'Navajo'}, {name: 'Neapolitan'}, {name: 'Nepali'}, {name: 'Nigerian Pidgin'}, {name: 'Norwegian'}, {name: 'Oromo'}, {name: 'Pahari'}, {name: 'Papago'}, {name: 'Papiamento'}, {name: 'Pashto'}, {name: 'Patois'}, {name: 'Pidgin English'}, {name: 'Polish'}, {name: 'Portug.creole'}, {name: 'Portuguese'}, {name: 'Pothwari'}, {name: 'Pulaar'}, {name: 'Punjabi'}, {name: 'Putian'}, {name: 'Quichua'}, {name: 'Romanian'}, {name: 'Russian'}, {name: 'Samoan'}, {name: 'Serbian'}, {name: 'Shanghainese'}, {name: 'Shona'}, {name: 'Sichuan'}, {name: 'Sicilian'}, {name: 'Sinhalese'}, {name: 'Slovak'}, {name: 'Somali'}, {name: 'Sorani'}, {name: 'Spanish'}, {name: 'Sudanese Arabic'}, {name: 'Sundanese'}, {name: 'Susu'}, {name: 'Swahili'}, {name: 'Swedish'}, {name: 'Sylhetti'}, {name: 'Tagalog'}, {name: 'Taiwanese'}, {name: 'Tajik'}, {name: 'Tamil'}, {name: 'Telugu'}, {name: 'Thai'}, {name: 'Tibetan'}, {name: 'Tigre'}, {name: 'Tigrinya'}, {name: 'Toishanese'}, {name: 'Tongan'}, {name: 'Toucouleur'}, {name: 'Trique'}, {name: 'Tshiluba'}, {name: 'Turkish'}, {name: 'Twi'}, {name: 'Ukrainian'}, {name: 'Urdu'}, {name: 'Uyghur'}, {name: 'Uzbek'}, {name: 'Vietnamese'}, {name: 'Visayan'}, {name: 'Welsh'}, {name: 'Wolof'}, {name: 'Yiddish'}, {name: 'Yoruba'}, {name: 'Yupik'}
        ]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SELECT LANGUAGE</Text>
        <SearchableDropdown
          items={this.state.data}
          onTextChange={text => {}}
          onItemSelect={item => this.setState({ languageId: item.name })}
          defaultIndex={index => this.setState({ languageId:  item.name })}
          containerStyle={{ paddingHorizontal: 5, }}
          textInputStyle={{
            padding: 15,
            fontSize: 20,
            borderColor: '#bfbfbf',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
          }}
          itemTextStyle={{ color: '#222', fontSize: 16 }}
          itemsContainerStyle={{ maxHeight: 150 }}
          defaultIndex={2}
          placeholder="Search Language here...."
          resetValue={false}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageStyle3:{
    flex: 1,
    width: 100,
    height: 50,
    resizeMode: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
});
