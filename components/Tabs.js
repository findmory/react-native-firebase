'use strict';

import React, {
    Component,
    StyleSheet,
    TabBarIOS,
    AsyncStorage,

} from 'react-native';

const styles = require('../styles.js');
const constants = styles.constants;

const MainTab = require('./MainTab');
const SettingsTab = require('./SettingsTab');

class Tabs extends React.Component {
   
    render() {
        return (
            <TabBarIOS
            tintColor="white"
            barTintColor="darkslateblue">
            
            <TabBarIOS.Item
                systemIcon="history"
                badge={this.props.useCount > 0 ? this.props.useCount : undefined}
                selected={this.props.selectedTab === 'mainTab'}
                onPress={() => this.props.chooseTab('mainTab')}
            >
                <MainTab 
                    dataSource={this.props.dataSource} 
                    deleteFromFirebase={this.props.deleteItem}
                    deleteAll={this.props.deleteAll}
                />

            </TabBarIOS.Item>

            <TabBarIOS.Item
                icon={require('./Settings-100.png')}
                title="Settings"
                selected={this.props.selectedTab === 'settingsTab'}
                onPress={() => this.props.chooseTab('settingsTab')}
            >
                <SettingsTab update={this.props.updateStateAndAsync} />
            </TabBarIOS.Item>
        </TabBarIOS>
        );
    }
}

module.exports = Tabs;