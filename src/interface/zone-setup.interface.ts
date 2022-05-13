


interface Location{
    latitude: number,
    longitude: number,
}

interface AddZoneInterFace{
    zoneName: string;
    status?:Boolean;
    location?:any;
}
interface updateZoneSetUpInterFace{
    zoneName?: string;
    status?:Boolean;
    location?:any;
}


export {
    AddZoneInterFace,
    updateZoneSetUpInterFace
}