/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    Image
    } = React;

var PUPPIES_DATA = [
    {name: 'The Dog', breed: 'Simple doggy67868kjl', images: {thumbnail: 'http://i.imgur.com/iCUDmCD.png'}}
];

var AwesomeProject = React.createClass({

    render: function () {
        var puppy = PUPPIES_DATA[0];
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: puppy.images.thumbnail}}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.name}> {puppy.name}</Text>
                    <Text style={styles.breed}> {puppy.breed}</Text>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    listView: {
        paddingTop: 20,
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
