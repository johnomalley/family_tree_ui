import React from 'react'
import {TouchableHighlight, Text} from 'react-native'
import styles from './styles'

const MemberRow = ({member, showProfile}) => {
    const {familiarName, firstName, lastName} = member

    const onTouch = () => console.log('!!!')

    return (
        <TouchableHighlight style={styles.row} onTouch={onTouch}>
            <Text>{`${familiarName || firstName} ${lastName}`}</Text>
        </TouchableHighlight>
    )
}

export default MemberRow
