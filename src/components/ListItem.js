import React, {Component} from 'react';
import '../styles/listItem.css'
import DefaultUserImg from '../assets/defaultUser.svg'
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            isImgLoaded:false,
            imgUrl:DefaultUserImg
        };
        this.img=new Image();
        this.img.onload=()=>{
            this.setState({
                isImgLoaded:true,
                imgUrl:this.props.img
            });
        };
        this.img.src=props.img;
    }


    render() {
        return (

            <div className="card" onClick={this.props.clickHandler}>
                {this.state.isImgLoaded?<img src={this.state.imgUrl}  alt=""/>:<img src={this.state.imgUrl}  alt=""/>}
                    <p className="user-name">{this.props.name}</p>
            </div>
            

        );
    }
}

export default ListItem;