import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ShippingPartner from "../components/ShippingPartner";

const Shipping = ({ navigation }) => {
    return (
        <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            height: hp("25%"),
            width: "100%",
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: "gray"
          }}
        >
          <View
            style={{
              paddingHorizontal: 15
            }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 14
              }}
            >
              Which shipping partner do you like?
            </Text>
            <View
              style={{
                marginTop: 15
              }}
            >
              <ShippingPartner
                //imageUri={require("./assets/logo_1.jpg")}
                name="Sicepat"
                description="No additional Costs"
              />
              <ShippingPartner
                //imageUri={require("./assets/logo_2.png")}
                name="JNT"
                description="No Additional Costs"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15,
            flex: 1,
            paddingHorizontal: 15
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Payment')}
              style={{
                backgroundColor: "#F08C4F",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Procedd to Payment Steps!!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

export default Shipping;