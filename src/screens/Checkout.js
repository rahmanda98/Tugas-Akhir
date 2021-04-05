import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import TextInput from '../components/TextInput'
import Icon from 'react-native-vector-icons/FontAwesome'
import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator} from '../helpers/phoneValidator'


const Checkout = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: ''})
  const [phone, setPhone] = useState({ value: '', error: ''})

  const onCheckoutPress = () => {
    const nameError = nameValidator(name.value)
    const phoneError = phoneValidator(phone.value)
    if (nameError || phoneError) {
      setName({...name, error: nameError})
      setPhone({ ...phone, error: phoneError})
      return
    }
    navigation.navigate({
      index: 0,
      routes: [{ name: 'Shipping' }],
    })
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Icon
              name="angle-double-left"
              size={50}
              color="black"
            // onPress={handlePress}
            />
          </TouchableOpacity>
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>Checkout</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.textInput}>Masukkan Nama</Text>
          <TextInput 
              label="Nama" 
              value={name.value}
              onChangeText={(text) => setName({ value: text, error: '' })}
              error={!!name.error}
              errorText={name.error}
              />
          <Text style={styles.textInput}>Masukkan No.Hp</Text>
          <TextInput 
            label="No Hp" 
            value={phone.value}
            onChangeText={(text) => setPhone({ value: text, error: '' })}
            error={!!phone.error}
            errorText={phone.error}
          />
          <Text style={styles.textInput}>Masukkan Alamat</Text>
          <TextInput label="Alamat" />
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity onPress={onCheckoutPress}>
            <View style={styles.buttonCart}>
              <Text style={styles.textCart}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  container: {
    width: '90%',
    marginLeft: 80,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginRight: 20,
  },
  textInput: {
    color: 'grey',
  },
  buttonCart: {
    backgroundColor: 'skyblue',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCart: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
