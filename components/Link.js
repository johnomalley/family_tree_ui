import React from 'react'
import {TouchableHighlight, Text} from 'react-native'
import styles from './styles'

const Link = ({style, children, onPress}) =>
    <TouchableHighlight style={style || styles.nav} onPress={onPress}>
        <Text style={styles.link}>{children}</Text>
    </TouchableHighlight>

export default Link
