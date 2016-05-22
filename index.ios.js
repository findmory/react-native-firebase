'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    ListView,
    AlertIOS,
} from 'react-native';

const styles = require('./styles.js');
const constants = styles.constants;

const Tabs = require('./components/Tabs');

const Firebase = require('firebase');

class ReactNativeFirebase extends Component {
    constructor(props) {
        super(props);

        //get firebase ref
        this.firebaseRef = new Firebase("https://rn-fb-sample-data.firebaseio.com/");

        //set initial state
        this.state = {
            useCount: 0,
            selectedTab: 'mainTab',
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2,
            })
        };

        //use AsyncStorage to save persistent stuff.. like settings!

        //get the count from AsyncStorage to populate the page
        AsyncStorage.getItem('useCount').then((value) => {
            this.setState({'useCount': value || '0' });
            console.log("current value = " + this.state.useCount);
        }).done();

        //previously in the componentDidMount
        //this calls the listeners and waits for new items from FB
        this._listenForItems(this.firebaseRef);
    }

    //listen to Firebase for new data
    //whenever an item is added, changed or removed, 
    //you'll get the entire result set back as a DataSnapShot from Firebase SDK
    _listenForItems(firebaseRef) {
        firebaseRef.on('value', (snap) => {
            //get children as an array
            var items = [];
            snap.forEach((child) => {
                items.push({
                    date: child.val().date,
                    _key: child.key(),
                    time: child.val().time
                });
            });

            //update state and the AsyncStorage with current count
            this._updateCount(items.length);

            //dataSource is the data from Firebase for display
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        });
    }

    _updateCount(num){
        this.setState({
            'useCount' :  num.toString()
        });
        AsyncStorage.setItem('useCount', num.toString());

    }

    _deleteItem(item){
        this.firebaseRef.child(item._key).remove();
        console.log('deleting ', item);
        //update how many items there are
        this._updateCount(this.state.dataSource._cachedRowCount);
        console.log('now there are ', this.state.dataSource._cachedRowCount);
    }

    _deleteAll(){
        //delete all the Firebase items
        this.firebaseRef.remove();
        //delete all the Async
        AsyncStorage.removeItem('useCount').then((value) => {
            this.setState({
                useCount: 0,
            });
        }).done();
    }

    _updateStateAndAsync(kvp){
        let _this = this;
        Object.keys(kvp).forEach(function(key) {
            console.log('setting: ', kvp);
            _this.setState({
                [key]: kvp[key]
            });
            AsyncStorage.setItem(key, (kvp[key]).toString());
        }); 
    }
    _chooseTab(tab){
        this.setState({
            selectedTab: tab
        });
        console.log('state', this.state)
    }

    render() {
        return (
            <Tabs 
                useCount = {this.state.useCount}
                selectedTab = {this.state.selectedTab}
                dataSource = {this.state.dataSource}
                deleteItem = {this._deleteItem.bind(this)}
                deleteAll = {this._deleteAll.bind(this)}
                updateStateAndAsync = {this._updateStateAndAsync.bind(this)}
                chooseTab = {this._chooseTab.bind(this)}
            /> 
        );
    }
}


AppRegistry.registerComponent('ReactNativeFirebase', () => ReactNativeFirebase);
