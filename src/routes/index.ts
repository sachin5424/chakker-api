// all routes 
import AuthRouters from './auth.routes';
import {ZoneSetUpRoutes} from './zone-setup.routes';
import {SubZoneRoutes} from './sub-zone.routes'
import {DeviceSetUpRoutes} from './device-setup.routes';
import UserRoutes from './user.routes';
import permissionRoutes from './permission.routes';

const routes:any[] = [
    AuthRouters,
    ZoneSetUpRoutes,
    SubZoneRoutes,
    DeviceSetUpRoutes,
    UserRoutes,
    permissionRoutes
];


export default routes;



