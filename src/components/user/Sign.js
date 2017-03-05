import React from 'react';
import { Tabs } from 'antd';
import Page from '../page';
import Login from './Login';

const style = {
  centerTab: {
    maxWidth: 300,
    margin: "0 auto",
  },
};

class Sign extends React.Component {

  render() {
    return (
      <Page>
        <Tabs defaultActiveKey="login" style={style.centerTab}>
          <Tabs.TabPane tab="Sign In" key="login">
            <Login/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign Up" key="register">

          </Tabs.TabPane>
        </Tabs>
      </Page>
    );
  }

}

export default Sign;