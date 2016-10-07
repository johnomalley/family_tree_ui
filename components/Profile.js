import React from 'react'
import {TouchableHighlight, View, Text} from 'react-native'
import styles from './styles'
import Header from './Header'
import Property from './Property'
import Link from './Link'
import displayName from './displayName'
import profileProperties from './profileProperties'

const Profile = ({family, path, member, showProfile, goBack}) => {
    const renderChild = (child) =>
        <Link key={child.id} onPress={() => showProfile(child)}>
            {`${displayName(child)} -->`}
        </Link>

    const renderProperty = ({label, value, type}, index) =>
        <Property key={label} label={label} value={value} type={type} index={index} showProfile={showProfile}/>

    return (
        <View style={styles.container}>
            {path.length === 1 ? (<Header title={family.name}/>) : null}
            {path.length > 1 ? (<Link onPress={goBack}>{'<-- back'}</Link>) : null}
            {profileProperties(member).map(renderProperty)}
            {(member.children || []).map((child) => renderChild(child, showProfile))}
        </View>
    )
}

export default Profile
