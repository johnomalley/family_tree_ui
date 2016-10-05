import React from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import MemberList from './MemberList'
import Profile from './Profile'
import styles from './styles'
import * as actions from '../state/actions'
import isArray from 'lodash/isArray'
import last from 'lodash/last'

const App = ({path, showProfile, showChildren}) => {
    if (path && path.length) {
        const target = last(path)
        if (isArray(target)) {
            return (
                <MemberList members={target} showProfile={showProfile}/>
            )
        } else {
            return (
                <Profile member={target} showChildren={showChildren}/>
            )
        }
    } else {
        return (
            <View style={styles.container}>
                <Text>loading ...</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    showChildren: (member) =>
        dispatch(actions.showChildren(member)),
    showProfile: (member) =>
        dispatch(actions.showProfile(member)),
    goBack: () =>
        dispatch(actions.goBack())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

