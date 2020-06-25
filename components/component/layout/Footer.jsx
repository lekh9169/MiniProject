import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from '@reach/router';
import { About } from '../pages/About';
import { Row, Col, Divider } from 'antd';
import "../videos/complete.css"
const { Header, Footer, Sider, Content } = Layout;

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;





class FooterOfApp extends Component {
    render() {
        return (
            <div className="Footer">
                <Layout>
                 <Layout>
                    
                    <Footer style={{background:'black'}}>
                     
                        <Row justify="space-around" align="middle">
                        <Col style={{color:'white'}} span={4}>
                            
                        </Col>
                        <Col style={{color:'white'}} span={4}>
                            <h3 style={{color:'white'}}>TEAM MENT</h3>
                            <p style={{justifyContent: 'center', alignItems: 'center',color:'white'}}>Copyright &copy; {(new Date().getFullYear())}</p>
                        </Col>
                        <Col style={{color:'white'}} span={4}>
                        <h5 style={{color:"white"}}>Quick Links</h5>
                            <Link to="about.html" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</Link><br></br>
                        </Col>
                        <Col style={{color:'white'}} span={4}>
                        </Col>
                        </Row>
                        </Footer>
                </Layout>
                </Layout>

                
                   
                
            </div>
        )
    }
}

export default FooterOfApp;