import React from 'react'
import {Text, View} from 'react-native'
import MemberRow from './MemberRow'
import styles from './styles'

const MemberList = ({members, showProfile}) => {
    const renderMember = (member) =>
        <MemberRow key={member.id} member={member} showProfile={showProfile}/>

    return (
        <View style={styles.container}>
            {members.length ? members.map(renderMember) : <Text style={styles.row}>(not found)</Text>}
        </View>
    )
}

export default MemberList
