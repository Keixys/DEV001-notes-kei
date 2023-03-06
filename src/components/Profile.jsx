import { auth } from "../Firebase/configFirebase";

export function Profile(){
    return(
        <div>
             <h1>
            Hello in Profile
        </h1> 
        <p>{auth.currentUser.email}</p>
        </div>
    )
}