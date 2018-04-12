import React from 'react'

const Profile = () =>{
    return(
        <div>
            <img src={props.picture} alt={'user image of ' + props.name}/>
            <h1>{props.name}</h1>
            <h4>email: {props.email}</h4>
        </div>
    )
}
export default Profile