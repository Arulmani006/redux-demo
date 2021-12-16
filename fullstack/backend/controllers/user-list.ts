import APIResponse from '../helper/response';
import Users from '../service/user-service';

export const allUsers = async( _req:Request, res:Response) => {
    try {
        const users = await Users.userLists();
        return APIResponse.setSuccess(200, {message:users}).send(res)
    } catch (error){
        console.log('get users error', error);
        return APIResponse.setError(500, 'Internal server error').send(res);
    }
}