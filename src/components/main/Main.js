import React, {Component} from 'react';
import AppBar from '../appbar/AppBar';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


class Main extends Component {

  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <AppBar/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Main;
