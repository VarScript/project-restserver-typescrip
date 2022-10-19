import { Router } from "express";
import { getUsers, getUser, postUser, putUser, deletUser } from '../controller/users.controller';


const router = Router();

router.get     ('/', getUsers);
router.get     ('/:id', getUser);
router.post    ('/', postUser);
router.put     ('/:id', putUser);
router.delete  ('/:id', deletUser);



export default router;

