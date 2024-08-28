import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user';

export const saveUser = async( userLike ) => {

    const user = new User( userLike );

    if ( !user.firstName || !user.lastName ) 
        throw "First & last name name required";

    const userToSave = userModelToLocalhost( user );

    if( user.id ) {
        throw 'No implementada la actualización';
    }

    const updatedUser = await createUser( userToSave );
    return updatedUser;
}

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });
    return newUser;

}