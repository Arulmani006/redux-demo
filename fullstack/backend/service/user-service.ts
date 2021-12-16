import data from "../modeldata/usersLists.json";

class Users {
    constructor () {}

    //get userList
    async userLists () {
        try {
            const users = await data;
            console.log(users, 'users>>>>>>')
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new Users();