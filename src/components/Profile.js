import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../ducks/reducer'

const Profile = (props) =>{
    return(

        <div>
            {console.log('hi')}
            <img src={props.picture} alt={'user image of ' + props.name}/>
            <h1>{props.name}</h1>
            <h4> email: {props.email}</h4>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => {
    return state;

    
}
const mapDispatchToProps ={
    logout
};
export default connect(mapStateToProps)(Profile);