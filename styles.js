const React = require('react-native')
const {StyleSheet} = React
const constants = {
    actionColor: '#24CE84'
};

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
    },
    listview: {
        flex: 1,
    },
    li: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
        flexDirection: 'row',
    },
    liContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    liText: {
        color: '#333',
        fontSize: 16,
        paddingRight: 16,

    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row'
    },
    navbarTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
    },
    statusbar: {
        backgroundColor: '#fff',
        height: 22,
    },
    center: {
        textAlign: 'center',
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        //borderWidth: 1,
        paddingTop: 20,
        paddingBottom: 20
    },
    action: {
        // flex: 1,
        backgroundColor: '#F00C58',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 45,
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: constants.actionColor,
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },
    left: {
        fontSize: 16,
        textAlign: 'left',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20
    },
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20
    },
    pad:{
        paddingTop: 20,
    },
})

module.exports = styles
module.exports.constants = constants;