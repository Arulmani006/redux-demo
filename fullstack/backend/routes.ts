import { Router } from 'express';
import { allUsers } from './controllers/user-list';


const api = Router();

api.get('/all', allUsers);
//api.get('/:id', userId);

export{ api }