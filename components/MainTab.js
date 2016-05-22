'use strict';
const React = require('react-native');

const { Component, StyleSheet, Text, View, ListView, TouchableHighlight, AlertIOS, } = React;

const styles = require('../styles.js');

const ActionButton = require('./ActionButton');

class ListItem extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.li}>
                    <Text style={styles.liText}>{this.props.item.date}</Text>
                    <Text style={styles.liText}>{this.props.item.time}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}


class MainTab extends React.Component {
    _renderItem(item){
        const deleteItem = () => {
            AlertIOS.alert(
                'Delete Item?',
                null,
                [
                    {text: 'yes', onPress: (text) => this.props.deleteFromFirebase(item)},
                    {text: 'no', onPress: (text) => console.log('Cancel')}
                ]
            );
        };
        return(
            <ListItem item={item} onPress={deleteItem}/>
        );
    }

    //send message to index to delete all Firebase and Async items
    _deleteAll(){
        console.log('deleting all...');
        
        AlertIOS.alert(
            'Are you sure you want to delete all items from Firebase?',
            null,
            [
                {text: 'yes', onPress: (text) => this.props.deleteAll()},
                {text: 'no', onPress: (text) => console.log('Cancel')}
            ]
        );

    }

    render() {
        console.log(this.props.dataSource);
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Firebase DB has {this.props.dataSource._cachedRowCount} { this.props.dataSource._cachedRowCount == 1 ? "item" : "items"}</Text>
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={this._renderItem.bind(this)}
                    style={styles.listview}
                />
                <ActionButton style={styles.button} onPress={this._deleteAll.bind(this)} title="Delete All"/>
                
            </View>
        );
    }
}

module.exports = MainTab;