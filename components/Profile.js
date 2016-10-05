import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import moment from 'moment'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1
    }
})

const Profile = ({firstName, familiarName, lastName, dob}) => (
    <View style={styles.container}>
        <Text style={styles.row}>
            {`${familiarName || firstName} ${lastName}`}
            {moment(dob).format('MMMM D (YYYY)')}
        </Text>
    </View>
)

export default Profile
