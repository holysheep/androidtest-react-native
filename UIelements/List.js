/**
 * Created by lexy on 11/1/15.
 */

'use strict';

var React = require('react-native');
var styles = require('./styles');

var {
    View,
    Image,
    Text,
    ListView
    } = React;

var PUPPIES_DATA = [
    {name: 'The Dog', breed: 'Simple doggy', images: {thumbnail: require('image!doggy1')}},
    {name: 'The Cat', breed: 'Simple cat2', images: {thumbnail: require('image!doggy2')}}
];

var MainList = React.createClass({

    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(PUPPIES_DATA)
        }
    },

    render: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={styles.listView}/>
        )
    },

    _renderRow: function (rowData) {
        return (
            <View>
                <Image source={(rowData.images.thumbnail)} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>  {rowData.name}</Text>
                    <Text style={styles.breed}> {rowData.breed}</Text>
                </View>
            </View>
        );
    }
});

module.exports = MainList;