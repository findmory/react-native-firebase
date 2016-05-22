'use strict';
const React = require('react-native');

const { Component, StyleSheet, Text, View, TextInput, } = React;

const styles = require('../styles.js');

class SettingsTab extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            	<Text style={styles.pad}></Text>
                <Text style={styles.left}>Put some settings here</Text>
                <TextInput
    				style={styles.textInput}
    				onChangeText={(e) => this.props.update({e})}
    				value={this.props.value}
  				/>
            </View>
        );
    }
}

module.exports = SettingsTab;