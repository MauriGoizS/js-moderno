
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


/**
 * 
 * @param {String|Number} user 
 */
export const deleteUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url, {
        method: 'DELETE',
    });

    const deleteResult = await res.json();
    console.log({ deleteResult });

    return true;

}