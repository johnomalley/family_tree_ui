import React from 'react'
import {Text, View} from 'react-native'
import MemberRow from './MemberRow'
import GoBackNav from './Link'
import styles from './styles'

const MemberList = ({path, members, showProfile, goBack}) => {
    const renderMember = (member) =>
        <MemberRow key={member.id} member={member} showProfile={showProfile}/>

    return (
        <View style={styles.container}>
            {members.length ? members.map(renderMember) : <Text style={styles.row}>(not found)</Text>}
            {path.length > 1 ? (<GoBackNav goBack={goBack}/>) : null}
        </View>
    )
}

export default MemberList
