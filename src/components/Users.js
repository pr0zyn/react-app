import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers,deleteUser } from '../actions/requests';
import {Link }from 'react-router-dom';
class Users extends Component {

    componentWillMount() { 
        this.props.getUsers();

    }
    componentWillReceiveProps(newUser, id) { 
        if (newUser.newUser && Object.keys(newUser.newUser).length !== 0) {             
            this.props.users.unshift(newUser.newUser);
        }
       
        if (Object.keys(newUser.id).length !== 0) { 
            this.props.users.filter(user => { user.id !== newUser.id });
        }
    }

    remove(id) { 
        this.props.deleteUser(id);
    }

    render() {
        const userList = this.props.users.map(user => (
            <li className="list-group-item" key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.username}<br /> {user.email} <br /> {user.website} <br /> {user.phone}</p>
                <button className="btn btn-danger" onClick={this.remove.bind(this,user.id)}>Remove</button>
                <Link to={`/edit/${user.id}`}><button className="btn btn-default">Edit</button></Link>
            </li>
        ));    
    return (
      <div className="container">
            <h2>Users List</h2>
            <br/>
            <ul  className="list-group">
                {userList}
           </ul>     
      </div>
    )
  }
}

const mapStateToProps = state => ({
    users: state.users.items,
    newUser: state.users.item,
    id: state.users.id
});

export default connect(mapStateToProps, { getUsers,deleteUser })(Users);