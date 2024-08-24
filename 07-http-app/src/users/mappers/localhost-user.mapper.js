import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} locahostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( locahostUser ) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = locahostUser;

    return new User({ 
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });

}