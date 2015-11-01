/**
 * Created by lexy on 11/1/15.
 */

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    ToolbarAndroid,
    } = React;

var CustomToolbar = React.createClass({

    render: function () {
        var title = this.props.title;
        var icon = {uri: this.props.icon, isStatic: true};

        return (
            <ToolbarAndroid
                style={styles.toolbar}
                icon={icon}
                titleColor="#ffffff"
                title={title}/>
        )
    }
});

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#4E8EF7',
        height: 56
    }
});

module.exports = CustomToolbar;



