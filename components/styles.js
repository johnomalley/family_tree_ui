import {StyleSheet} from 'react-native'

const rowHeight = 25

export default StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    labelRow: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: rowHeight,
        paddingTop: 4,
        paddingLeft: 4
    },
    oddRow: {
        backgroundColor: '#fdefe5'
    },
    evenRow: {
    },
    propertyLabel: {
        fontWeight: 'bold',
        // color: '#ee6400',
        width: 80
    },
    nav: {
        flex: 0,
        paddingLeft: 5,
        flexDirection: 'row',
        height: rowHeight,
        alignItems: 'center'
    },
    link: {
        color: '#008aee'
    },
    value: {
    },
    header: {
    },
    headerLabel: {
        fontSize: 18,
        color: '#ee6400'
    }
})
