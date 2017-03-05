import React, {Component} from 'react';
import AppBar from '../appbar/AppBar';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const style = {
  layoutStyle: {
    backgroundColor: "#fff",
  },
  headerStyle: {
    height: "auto"
  },
  contentStyle: {
    padding: 50
  },
  footerStyle: {
    textAlign: "center"
  }
};


class Main extends Component {

  render() {
    return (
      <Layout className="layout" style={style.layoutStyle}>
        <Header className="header" style={style.headerStyle}>
          <AppBar/>
        </Header>
        <Content style={style.contentStyle}>
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
