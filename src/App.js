import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import ProfileDetail from "./components/ProfileDetail";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            overlayStatus:false,
            activeUserId:null,
            list:[]
        }
    }
    componentDidMount() {
        fetch("https://mock-io.herokuapp.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    list:data
                });
            });
    }
    profileClickHandler=(id)=>{
        console.log(id);
        this.setState({
            overlayStatus:true,
            activeUserId:id
        })
    }
    overlayCloseHandler=()=>{
        this.setState({
            overlayStatus:false,
            activeUserId:null
        })
    }
    getInfoById(){
        return this.state.list.filter((data) => {
            if (data.id === this.state.activeUserId) {
                console.log(data);
                    return data;
            }
        })
    }
    render() {
    return (
        <div className="main-container">
          <Header/>
          <div className="card-container">
              { this.state.list.length!==0?this.state.list.map(({ id,firstName,lastName,profileImage })=> <ListItem clickHandler={()=>this.profileClickHandler(id)} key={id} name={firstName+lastName} img={profileImage} /> ):<p>loading..</p>}
          </div>
            { this.state.overlayStatus?<ProfileDetail data={this.getInfoById()[0]} handler={this.overlayCloseHandler}/>:null}
        </div>
    );
  }
}

export default App;
