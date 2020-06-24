import React ,{useState}from 'react'
import Posts from  './Posts'
import Post from './Post'
import MentTransparent from './component/Images/MentTransparent.png';
import CreatePost from './CreatePost'
import{Router,Link, navigate} from "@reach/router"
import { Menu } from 'antd';
import UpdatePost from './UpdatePost';
import SignIn from './SignIn'
import SignUp from './SignUp'
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {auth} from '../firebase'
import PostApp from './PostApp';
import MyPosts from './MyPosts';
import MyPostsSnippet from './MyPostsSnippet';
import store from './store';
import {Provider} from 'react-redux';
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Volunteers from './component/volunteer/Volunteers'
import Profile from './component/volunteer/Profile';
import Chat from './component/chat/Chat';
import Home from './component/pages/Home';
import CuratedContent from './component/videos/routing'
import UserInputs from './component/videos/user_inputs'


//const {SubMenu} = Menu;
function App(props){
    const [user,setUser]=useState(false)
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          // ...
          setUser(user)
          navigate("/")
        } 
        else {
          // User is signed out.
          console.log("No user Signed in")
          //alert("password")
          // ...
        }
      });
      const onSignOut=()=>{
        console.log('signing out',props)
        auth.signOut().then(function(){

            console.log('user signed out')
            alert('signed out')
            setUser(false)
            navigate("/")
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
          });
      }
    console.log(user)  
    return (
      <Provider store={store}>
        <nav className ="navbar navbar-expand-sm navbar-dark navbar-custom">
        <div className = "container">
          <Link className="navbar-brand" to="/">
          
          <img src={MentTransparent} width = "100" height = "500" className="img-fluid" />
          
            </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              {!user ?
              <li className="nav-item">
                <Link to="/sign_in" className="nav-link">Videos</Link>
              </li>
              :
              <li className="nav-item">
                <Link to="/videos" className="nav-link">Videos</Link>
              </li>
              }
              {!user ?
                <li className="nav-item">
                  <Link to="/sign_in" className="nav-link">Volunteers</Link>
                </li>
                :  
                <li className="nav-item">
                  <Link to="/volunteers" className="nav-link">Volunteers</Link>
                </li>
              } 
              <li className="nav-item">
                <Link to="/postapp" className="nav-link">Blogs</Link>
              </li>
              {!user 
                        ?
                        <Link  to="/sign_in" className="nav-item">Sign In</Link>
                        :
                        <a className="nav-item" onClick ={onSignOut} >Sign Out</a>
                        
              }

            </ul>
          </div>
        </div>
      </nav>
         {/* <Header user={user}/> */}
          <div className="app_container">
            <Router>
                  
                  <SignUp path="sign_up"/>
                  <SignIn path="sign_in"/>
                  <PostApp path ="postapp" user={user}/>
                  <Home path="home" default/>
                  <Volunteers path="volunteers"/>
                  <Chat path="chat" user={user}/>
                  <CuratedContent path="videos" user={user}/>
                  <Profile path="profile/:id" user={user}/>
                  <UserInputs path="userInput" user={user}/>
                  <MyPosts path="blogs/:uid/posts" user={user}/>
                  <CreatePost path="create_post" user={user}/>
                  <Post path="post/:id"/>
                  <UpdatePost path="update_post/:id" user={user}/>


              </Router>

          </div>
          <Footer/>
        </Provider>
        
    )

}
export default App;