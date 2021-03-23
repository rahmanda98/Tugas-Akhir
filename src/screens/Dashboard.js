import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";
import CardSilder from 'react-native-cards-slider';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: 'pilih',
      images: [
        "https://blogpictures.99.co/makanan-khas-indonesia-header.png",
        "https://cdn.popbela.com/content-images/post/20200417/2f4801387f2c957d598dfe8dd74b11bf_750x500.jpg",
        "https://img.okezone.com/content/2019/07/04/298/2074589/4-makanan-khas-indonesia-yang-paling-diburu-di-luar-negeri-gOjMyZizaf.jpg",
        "https://cdn.idntimes.com/content-images/post/20170721/resep-rawon-98d900d3e27085f192f57e3167b4d834_600x400.jpeg" // url gambar
      ]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>

          {/* h1 menu */}
          <Text style={styles.h1}>MENU</Text>

          {/* icon cart */}
          <TouchableOpacity>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={{
                uri: 'https://www.pngfind.com/pngs/m/143-1434681_digicollect-cart-icon-png-download-submit-order-icon.png',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>

          {/* text input search */}
          <TextInput
            style={styles.textInput}
            placeholder="Search" />

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
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => this.setState({
              country: item.value
            })}
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
          autoplay />
        {/* tutup image slider */}

        {/* card slider */}
        <CardSilder style={{ marginTop: 30 }}>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu1
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightsalmon' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu2
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'teal' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu3
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu4
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
        </CardSilder>
        {/* tutup card slider */}

        {/* card slider */}
        <CardSilder style={{ marginTop: 30 }}>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu1
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightsalmon' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu2
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'teal' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu3
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu4
            </Text>
            {/* button detail */}
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
        </CardSilder>
        {/* tutup card slider */}

      </ScrollView>
    )
  }
}
export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  h1: {
    color: "#0099ff",
    marginRight: 75,
    marginLeft: 165,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: "bold",
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonStyle: {
    backgroundColor: '#00345e',
    width: 100,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  dropdown: {
    height: 48,
    width: 100,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    paddingLeft: 16
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
    paddingLeft: 16
  }
})