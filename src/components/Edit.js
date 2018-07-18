import React, { Component } from 'react'
import { getUser } from '../actions/requests';
import { connect } from 'react-redux';
import {Link }from 'react-router-dom';
class Edit extends Component {
    constructor(props,state) { 
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            phone: '',
            website: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.props.getUser(props.match.params.id);

    }

    onChange(e) { 
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) { 
        e.preventDefault();
        const post = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website
        }
        this.props.createUser(post);
    }

    render() {
    return (
      <div className="container">
            <h2>User Form</h2>
            <form className="col-md-12" onSubmit={this.onSubmit}>
                <div className=" form-group">
                            <label>Name</label>
                            <input className="form-control" value={this.state.name} onChange={this.onChange} name="name" type="text"/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" value={this.state.username} name="username" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" value={this.state.email} onChange={this.onChange} name="email" type="email"/>
                            </div>
                        <div className="form-group">
                            <label>Website</label>
                            <input type="text" className="form-control" value={this.state.website} name="website" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" value={this.state.phone} name="phone" onChange={this.onChange}/>
                    </div>
                <button className="btn btn-success" type="submit">Save</button>
            </form>    
      </div>
    )
  }
 }
const mapStateToProps = (state,props) => ({
    data: state.users.item
});

    
    export default connect(mapStateToProps, {getUser})(Edit);