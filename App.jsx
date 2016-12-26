import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import EnhancedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

injectTapEventPlugin();

export default class MyApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {drawerOpen: false};
    }

    drawerHandleToggle() {
        this.setState({drawerOpen: !this.state.drawerOpen});
    }

    drawerHandleClose() {
        this.setState({drawerOpen: false});
    }

    render() {
        return (
            <div>
                <AppBar
                    title="AI Playground"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.drawerHandleToggle.bind(this)}
                />
                <Drawer
                    docked={false}
                    width={280}
                    open={this.state.drawerOpen}
                    onRequestChange={(open) => this.setState({drawerOpen: false})}
                >
                    <MenuItem onTouchTap={this.drawerHandleClose.bind(this)}>Problems</MenuItem>
                    <MenuItem onTouchTap={this.drawerHandleClose.bind(this)}>Challenge</MenuItem>
                    <MenuItem onTouchTap={this.drawerHandleClose.bind(this)}>News</MenuItem>
                </Drawer>
            </div>
        );
    }
}


