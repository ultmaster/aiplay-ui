import React, {Component} from 'react';
import AppBar from '../appbar/AppBar';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const style = {
  layoutStyle: {
    backgroundColor: "#fff",
  },
  footerStyle: {
    textAlign: "center"
  }
};


class Main extends Component {

  render() {
    return (
      <Layout className="layout" style={style.layoutStyle}>
        <Header className="header">
          <AppBar/>
        </Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer style={style.footerStyle}>
          AI Playground © 2016 - 2017 Powered by Ant Design
        </Footer>
      </Layout>
    );
  }
}

export default Main;
