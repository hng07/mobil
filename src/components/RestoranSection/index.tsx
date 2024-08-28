import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

function RestoranSection() {
    return (
        <View style={styles.restoranSection}>
            <Text style={styles.title}>Restoranlar</Text>
            <ScrollView  style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>KFC</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Burger King</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Dominos</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Starbucks</Text>
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    restoranSection: {
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    container: {
        flex: 1,
      },
      box: {
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderBottomWidth:3,
        borderBottomColor:'black'
      },
      text: {
        fontSize: 18,
      },
    // brandCard: {
    //     width: 200,
    //     marginRight: 10,
    //     alignItems: 'center',
    //     borderRadius: 8,
    //     paddingVertical: 10,
    // },
    // brandImage: {
    //     width: 70,
    //     height: 70,
    //     marginBottom: 5,
    // },
    // brandName: {
    //     fontSize: 14,
    //     fontWeight: '500',
    //     color: '#000',
    // },
})
export default RestoranSection;