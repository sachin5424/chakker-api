import {Router} from 'express';
import UserPermissionController from '../controllers/user-permission.controller';
import {createUserPermissionValidation} from '../validations/user-permission.validations';
import {checkValidResponse} from '../middleware/checkValidResponse'

const userPermissionController = new UserPermissionController()
const router:Router =  Router();


router.post('/admin/user/create/permission',createUserPermissionValidation,checkValidResponse,userPermissionController.createUserPermission);
router.get('/admin/user/get/permission',userPermissionController.ListUserPermission)
router.post('/admin/user/check/permission',userPermissionController.checkModulesPermission);
router.get('/admin/user/all/permission',userPermissionController.getAllPermissions)
router.get("/admin/check/users/permission/:userId",userPermissionController.checkUsersPermissions)

export default router 




