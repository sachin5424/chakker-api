


interface Location{
    latitude: number,
    longitude: number,
}

interface subZoneInterFace{
    zoneName: string;
    status?:Boolean;
    location?:any;
}


interface updateSubZoneInterFace{
    zoneName?: string;
    status?:Boolean;
    location?:any;
}




export {
    subZoneInterFace,
    updateSubZoneInterFace
}