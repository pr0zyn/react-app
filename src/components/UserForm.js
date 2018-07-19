import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createUser, getUser, updateUser } from '../actions/requests';
import { Link } from 'react-router-dom';
 class UserForm extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            name:'',
            username:'',
            email:'',
            phone:'',
            website: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        if (props.match !== undefined && props.match.params.id !== undefined) { 
            this.props.getUser(props.match.params.id);
        }
        
    }
    componentWillReceiveProps(data) {
        if (data.data) { 
            this.setState({
                name:  data.data.name,
                username:  data.data.username,
                email:  data.data.email,
                phone:  data.data.phone,
                website: data.data.website
            });    
        }
    } 
        
        onChange(e) { 
            this.setState({ [e.target.name]: e.target.value });
        }
        onSubmit(e) { 
            e.preventDefault();
            const data = {
                name: this.state.name ||'',
                username: this.state.username || '',
                email: this.state.email || '',
                phone: this.state.phone || '',
                website: this.state.website ||''
            }
            if (this.props.match !== undefined && this.props.match.params.id !== undefined) {
                this.props.updateUser(data,this.props.match.params.id);
                this.props.history.push("/");
            } else { 
                this.props.createUser(data);
            }
        }
     
        render() {
    return (
      <div className="container">
            <h2>User Form</h2>
            <form className="col-md-12" onSubmit={this.onSubmit}>
                <div className="row">        
                <div className=" col-md-3 form-group">
                            <label>Name</label><br />
                            <input className="form-control" value={this.state.name} onChange={this.onChange} name="name" type="text"/>
                        </div>
                        <div className=" col-md-3 form-group">
                            <label>Username</label><br />
                            <input className="form-control" value={this.state.username} name="username" onChange={this.onChange}/>
                        </div>
                        <div className="col-md-3 form-group">
                            <label>Email</label><br />
                            <input className="form-control" value={this.state.email} onChange={this.onChange} name="email" type="email"/>
                            </div>
                        <div className="col-md-3 form-group">
                            <label>Website</label><br />
                            <input type="text" className="form-control" value={this.state.website} name="website" onChange={this.onChange}/>
                        </div>
                        <div className="col-md-3 form-group">
                            <label>Phone</label><br />
                            <input type="text" className="form-control" value={this.state.phone} name="phone" onChange={this.onChange}/>
                    </div>
                    </div>
                        <button className="btn btn-success" type="submit">Submit</button>                  
            </form>    
      </div>
    )
  }
 }

 const mapStateToProps = state => ({
    data: state.users.item
});

export default connect(mapStateToProps, {createUser,getUser,updateUser})(UserForm);