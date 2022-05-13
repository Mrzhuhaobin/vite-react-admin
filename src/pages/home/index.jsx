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
      <Layout style={{minHeight: '100vh'}}>
        <Sider trigger={null} style={{position: 'fixed', left: 0, height: '100%'}}>
          <Aside/>
        </Sider>
        <Layout className="site-layout">
          
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    );
}

export default Home