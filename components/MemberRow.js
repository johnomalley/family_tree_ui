import React from 'react'
import {TouchableHighlight, Text} from 'react-native'
import styles from './styles'
import displayName from './displayName'

const MemberRow = ({member, showProfile}) => (
    <TouchableHighlight style={styles.nav} onPress={() => showProfile(member)}>
        <Text>{displayName(member)}</Text>
    </TouchableHighlight>
)

export default MemberRow
