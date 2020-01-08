import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import ProfileDetail from "./components/ProfileDetail";
import Search from "./components/Search";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            overlayStatus:false,
            activeUserId:null,
            searchData:"",
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
    };
    overlayCloseHandler=()=>{
        this.setState({
            overlayStatus:false,
            activeUserId:null
        })
    };
    getInfoById(){
        return this.state.list.filter((data) => {
            if (data.id === this.state.activeUserId) {
                console.log(data);
                    return data;
            }
        })
    }
    searchInputChangeHandler=(event)=>{
        console.log(event.target.value);
        this.setState({
            searchData:event.target.value
        })
    };
    filterData=(arr=[],searchData="")=>arr.filter((data)=>{
        if(data['firstName'].toLowerCase().includes(searchData.toLowerCase())){
            return data;
        }

    });

    render() {
    return (
        <div className="main-container">
          <Header/>
          <div className="body-container">
              <Search searchData={this.state.searchData} handler={this.searchInputChangeHandler}/>
          <div className="card-container">
              { this.state.list.length!==0?this.filterData(this.state.list,this.state.searchData).map(({ id,firstName,lastName,profileImage })=> <ListItem clickHandler={()=>this.profileClickHandler(id)} key={id} name={firstName+lastName} img={profileImage} /> ):<div className="loading-ui-container"/>}
          </div>
          </div>
            { this.state.overlayStatus?<ProfileDetail data={this.getInfoById()[0]} handler={this.overlayCloseHandler}/>:null}
        </div>
    );
  }
}

export default App;
