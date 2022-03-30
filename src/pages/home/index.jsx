import React, { useState } from 'react'

import './index.scss'
import '@/layout/layout.scss'
import Aside from '@/layout/aside';
import Head from '@/layout/head';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function Home () {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };

    return (
      <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Aside/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Head
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            toggle={toggle}
            />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    );
}

export default Home