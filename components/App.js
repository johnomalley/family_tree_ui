import React from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import Profile from './Profile'
import styles from './styles'
import * as actions from '../state/actions'
import last from 'lodash/last'

const App = ({path, family, showProfile, goBack}) =>
    path && path.length ? (
        <Profile path={path} family={family} member={last(path)} showProfile={showProfile} goBack={goBack}/>
    ) : (
        <View style={styles.container}>
            <Text>loading ...</Text>
        </View>
    )

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    showProfile: (member) =>
        dispatch(actions.showProfile(member)),
    goBack: () =>
        dispatch(actions.goBack())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

