import {userRegisterValidate,UserVerificationValidate} from '../validations/user-register.validations';
import {Router} from 'express';
import {checkValidResponse} from '../middleware/checkValidResponse';
import UserController from '../controllers/user.controller'

const userController = new UserController()

const router:Router =  Router();

router.post('/user-register',userRegisterValidate,checkValidResponse,userController.userRegister);
router.post('/user-email-verify',UserVerificationValidate,checkValidResponse,userController.userEmailVerification);
router.get('/admin/user-list',userController.userList)
router.get('/admin/user-details/:id',userController.userDetails)
router.put('/admin/user-update/:id',userController.userUpdate)
export default router
