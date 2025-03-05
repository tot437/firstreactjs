import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
import Footer from './Fotter';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:"flex",justifyContent:"center",alineItems:"center"}}>
            {/* this is the post and side menu container */}
      <div style={{display:"flex",width:"60%"}}>
             {/* this is the post container */}
          <div style={{width:"70%",}}>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
          </div>
            {/* ===this is the post container ===*/}

            {/* this is a side menu container */}
            <div style={{width:"30%"}}>
                   <SideMenu/>
            </div>
      </div>
      </div>
      
      <Footer/>


    </div>
  );
}

export default App;
