import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image } from 'react-native';
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
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree" // Network image
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
          <Text style={styles.h1}>MENU</Text>
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
          <TextInput
            style={styles.textInput}
            placeholder="Search" />

          <DropDownPicker
            items={[
              { label: 'Pilih', value: 'pilih', hidden: true },
              { label: 'ASIA', value: 'asia' },
              { label: 'EUROPA', value: 'europa' },
              { label: 'TIMUR', value: 'timur' },
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
        </View>
        <SliderBox
          style={{
            height: 200,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            marginBottom: 10,
          }}
          images={this.state.images} />
        <CardSilder style={{ marginTop: 30 }}>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu1
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightsalmon' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu2
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'teal' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu3
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu4
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
        </CardSilder>
        <CardSilder style={{ marginTop: 30 }}>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu1
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightsalmon' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu2
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'teal' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu3
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
              menu4
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonTitle}>Detail</Text>
            </TouchableOpacity>
          </View>
        </CardSilder>
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
    paddingLeft: 16
  }
})