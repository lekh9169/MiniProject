import React ,{useState}from 'react'
import Posts from  './Posts'
import Post from './Post'
import CreatePost from './CreatePost'
import{Router,Link} from "@reach/router"
import { Menu } from 'antd';
import UpdatePost from './UpdatePost';
import SignIn from './SignIn'
import SignUp from './SignUp'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MyPosts from './MyPosts'
import Particles from 'react-particles-js';

const {SubMenu} = Menu;
function PostApp(props){
    
    console.log(props.user)
    return (
        
          <div className="app_container">
              
              <div className="app_main_navigation">
               
                  <Menu mode="horizontal">
                      <Menu.Item key="posts" icon={<MailOutlined />}>
                        <Link to="/posts" style={{ float:'right'}}>Posts</Link>
                      </Menu.Item>
                
                        {props.user && 
                          <Menu.Item key="create_post"  icon={<AppstoreOutlined />}>
                          <Link to="/create_post" style={{ float:'right'}}>Create Posts</Link>
                          </Menu.Item>

                            }
                        {props.user &&
                          <Menu.Item key="Myposts" icon={<SettingOutlined />}>
                            <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}>My Posts</Link>
                          </Menu.Item>
                          }
                      
                      
                  </Menu>   

                
          
            </div>
            
              
                  
                  
                  <Posts/>
                  
       

          </div>
          
       
        
    )

}
export default PostApp;