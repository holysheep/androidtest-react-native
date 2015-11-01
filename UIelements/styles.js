/**
 * Created by lexy on 11/1/15.
 */

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    } = React;


var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000000'
    },
    listView: {
        backgroundColor: '#F5FCFF'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 10
    },
    rightContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'flex-start'
    },
    name: {
        fontSize: 20
    },
    breed: {
        color: '#333333',
        marginTop: 5
    }

});

module.exports = styles;
