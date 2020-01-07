import React, {Component} from 'react';
import  '../styles/profileDetail.css'
class ProfileDetail extends Component {
    constructor(props) {
        super(props);
        this.userName=props.data['firstName']+" "+ props.data['lastName'];
        this.address=this.getAddress(props.data);
        this.contact=this.getContact(props.data);
        this.imageUrl=this.props.data['profileImage'];
        console.log("scroll y"+window.scrollY)
    }
    getAddress({ address: {country,city,state,streetAddress} }){
        return {country,city,state,streetAddress};
    }
    getContact({ email,phone }){
        return {email,phone}
    }
    render() {
        return (
            <div className="overlay-container" style={{top:window.scrollY}}>
                <div className="overlay-wrapper">
                    <div className="overlay-header">
                        <h2>{this.userName}</h2>
                        <div className="close-btn" onClick={this.props.handler}>X</div>
                    </div>
                    <div className="overlay-imgContainer">
                        <img className="bg-image" src={this.imageUrl} alt=""/>
                        <img className="profile-image" src={this.imageUrl} alt=""/>
                        <div className="profile-username">
                            <p>{this.props.data['firstName']+" "+this.props.data['lastName']}
                            </p>
                            </div>
                    </div>
                    <div className="overlay-profileInfo">
                        <div className="overlay-body-left">
                            <h2>Address</h2>
                            {Object.keys(this.address).map((key,index)=>
                                    <div className="info-item" key={key}>
                                    <div className="label">{key+":"}</div>
                                    <div className="data">{this.address[key]}</div>
                            </div>
                            )}
                        </div>
                        <div className="overlay-body-right">
                            <h2>Contact</h2>
                            {Object.keys(this.contact).map((key,index)=>
                                <div className="info-item" key={key}>
                                    <div className="label">{key+":"}</div>
                                    <div className="data">{this.contact[key]}</div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileDetail;