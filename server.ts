import App from './src/app';


const app =  new App();


function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * (1000 * 60 * 60);
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * (1000 * 60);
    var seconds = Math.floor(diff / 1000);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;
    var te = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + (seconds<= 9 ? "0" : "") + seconds;
    console.log(te)
    return te
}

console.log(new Date("1660929163539"))
console.log(duration('2019-07-17T18:35:25.235Z', '2019-07-20T00:37:28.839Z'));
console.log(duration('2019-07-17T18:35:25.235Z', new Date()));
function duration(t0:any, t1:any){
    var end:any =new Date(t0);
    var d:any = new Date(t1)
    d = d-end 
    let weekdays     = Math.floor(d/1000/60/60/24/7);
    let days         = Math.floor(d/1000/60/60/24 - weekdays*7);
    let hours        = Math.floor(d/1000/60/60    - weekdays*7*24            - days*24);
    let minutes      = Math.floor(d/1000/60       - weekdays*7*24*60         - days*24*60         - hours*60);
    let seconds      = Math.floor(d/1000          - weekdays*7*24*60*60      - days*24*60*60      - hours*60*60      - minutes*60);
    let milliseconds = Math.floor(d               - weekdays*7*24*60*60*1000 - days*24*60*60*1000 - hours*60*60*1000 - minutes*60*1000 - seconds*1000);
    let t = {};
    ['weekdays', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].forEach(q=>{ if (eval(q)>0) { t[q] = eval(q); } });
    return t;
}

app.listen()





