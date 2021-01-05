import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyProfile = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>my profile</Text>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'seagreen'
    }
})
