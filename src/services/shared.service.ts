let aggregate = (model: any, filter: any[]) => {
    return new Promise((resolve, reject) => {
        model.aggregate(
            filter
        ).exec((err:any, invites:any) => {
            if (err) {
                reject(err)
            }
            resolve(invites)
        })
    })
}


export {
    aggregate
}