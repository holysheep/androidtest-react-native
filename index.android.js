/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var CustomToolbar = require('./UIelements/CustomToolbar');
var List = require('./UIelements/List');
var styles = require('./UIelements/styles');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;


var AwesomeProject = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <CustomToolbar title={'TODO'} icon={'ic_arrow_back_white_24dp'}/>
                <View style={styles.mainContent}>
                <List />
                </View>
            </View>
        )
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
