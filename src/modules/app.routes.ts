// all routes 
import AuthRouters from './auth.modules/auth.modules';
import {ZoneSetUpRoutes} from './zone-setup.modules/zone-setup.router';
import {SubZoneRoutes} from './sub-zone.modules/sub-zone.routes'
import {DeviceSetUpRoutes} from './device-setup/device-setup.router'
const routes:any[] = [
    AuthRouters,
    ZoneSetUpRoutes,
    SubZoneRoutes,
    DeviceSetUpRoutes
];


export default routes;



