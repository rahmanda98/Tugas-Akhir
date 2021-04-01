import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { block } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SliderBox } from 'react-native-image-slider-box'
import CardSilder from 'react-native-cards-slider'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      country: 'pilih',
      images: [
        'https://blogpictures.99.co/makanan-khas-indonesia-header.png',
        'https://cdn.popbela.com/content-images/post/20200417/2f4801387f2c957d598dfe8dd74b11bf_750x500.jpg',
        'https://img.okezone.com/content/2019/07/04/298/2074589/4-makanan-khas-indonesia-yang-paling-diburu-di-luar-negeri-gOjMyZizaf.jpg',
        'https://cdn.idntimes.com/content-images/post/20170721/resep-rawon-98d900d3e27085f192f57e3167b4d834_600x400.jpeg', // url gambar
      ],
      datas: []
    }
  }

  getAPI = () => {
    axios.get('https://masak-apa-tomorisakura.vercel.app/api/categorys/recipes/')
      .then(res => {
        const datas = res.data.results;
        console.log(datas);
        this.setState({ datas });
      })
  }

  componentDidMount() {
    this.getAPI();
    console.log(this.getAPI());
  }

  renderCard = () => {
    return (
      <FlatList
        horizontal
        data={this.state.datas}
        renderItem={({ item }) => (
          <View
            style={{
              height: 225,
              width: 250,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginTop: 25,
              marginRight: 15,
              marginLeft: 25
            }}
          >
            <Image style={{ width: 200, height: 100, borderRadius: 10 }} source={{ uri: 'https://blogpictures.99.co/makanan-khas-indonesia-header.png' }} />
            <Text style={{ color: 'white', fontSize: 18, lineHeight: 50, fontWeight: 'bold' }}>{item.category}</Text>
            <TouchableOpacity
              style={styles.buttonStyle1}
              onPress={() => this.props.navigation.navigate('DetailMenu')}
            >
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
        )} />
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={25} color="#0099ff" />
          </TouchableOpacity>
          {/* h1 menu */}
          <Text style={styles.h1}>MENU</Text>

          {/* icon cart */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}
          >
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={{
                uri:
                  'https://www.pngfind.com/pngs/m/143-1434681_digicollect-cart-icon-png-download-submit-order-icon.png',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* text input search */}
          <TextInput style={styles.textInput} placeholder="Search" />

          {/* dropdown  */}
          <DropDownPicker
            //item dropdown
            items={[
              { label: 'Pilih', value: 'pilih', hidden: true },
              { label: 'Asia', value: 'asia' },
              { label: 'Europa', value: 'europa' },
              { label: 'Timur', value: 'timur' },
            ]}
            defaultValue={this.state.country}
            containerStyle={{ height: 70 }}
            style={styles.dropdown}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
          {/* dropdown  */}
        </View>

        {/* image slider */}
        <SliderBox
          style={{
            height: 200,
            marginLeft: 30,
            marginRight: 25,
            marginTop: 10,
            marginBottom: 10,
          }}
          images={this.state.images}
          autoplay
          circleLoop
        />
        {/* tutup image slider */}

        {this.renderCard()}
      </ScrollView>
    )
  }
}
export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  h1: {
    color: '#0099ff',
    marginLeft: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#00345e',
    width: 100,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle1: {
    backgroundColor: '#00345e',
    width: 100,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    height: 48,
    width: 130,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    paddingLeft: 20,
  },
  textInput: {
    height: 48,
    width: 200,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 5,
    paddingLeft: 16,
  },
})
