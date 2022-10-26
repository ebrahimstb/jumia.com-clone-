import dayjs from "dayjs";

export function getRemainingTimeUntilMs(timestampMs){
    const timestampDayjs = dayjs(timestampMs)
    const nowDayjs = dayjs()
    return{
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    };
}

function getRemainingSeconds(nowDayjs, timestampDayjs){
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padwithzeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timestampDayjs){
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padwithzeros(minutes, 2);
}
function getRemainingHours(nowDayjs, timestampDayjs){
    const Hours = timestampDayjs.diff(nowDayjs, 'Hours') % 24;
    return padwithzeros(Hours, 2);
}
function getRemainingDays(nowDayjs, timestampDayjs){
    const Days = timestampDayjs.diff(nowDayjs, 'Days');
    return padwithzeros(Days, 2);
}
function padwithzeros(number, minlength){
    const numberstring = number.toString()
    if(numberstring.length >=  minlength) return numberstring;
    return "0".repeat(minlength -numberstring.length) + numberstring
}