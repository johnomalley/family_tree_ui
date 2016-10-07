import React from 'react'
import {View, Text, TouchableHighlight, Linking} from 'react-native'
import styles from './styles'
import Link from './Link'
import displayName from './displayName'

const openLink = (value, type) =>
    Linking.openURL(`${type === 'email' ? 'mailto' : 'tel'}:${value}`).catch(() => undefined)

const Property = ({label, value, type, index, showProfile}) => {
    const renderValue = () => {
        if (type === 'email' || type === 'phone') {
            return (<Link style={styles.value} onPress={() => openLink(value, type)}>{value}</Link>)
        } else if (type === 'member') {
            return (<Link style={styles.value} onPress={() => showProfile(value)}>{displayName(value)}</Link>)
        } else {
            return (<Text style={styles.value}>{value}</Text>)
        }
    }

    return (
        <View style={[styles.labelRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
            <Text style={styles.propertyLabel}>{label}</Text>
            {renderValue()}
        </View>
    )
}

export default Property
