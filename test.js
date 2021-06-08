const classes = [
    {
        "period": 0,
        "name": "Pastoral Care",
        "prof": "",
        "place": "",
        "day": 1,
        "startTime": [11,0]
    },
    {
        "period": 1,
        "name": "Math",
        "prof": "",
        "place": "",
        "day": 1,
        "startTime": [2,0]
    }
]

function getCurrentPeriod() {
    const date = new Date();
    console.log(date.getHours());
console.log(date.getMinutes());
    for (var i = 0; i < classes.length; i += 1) {
        if (date.getHours() >= classes[i].startTime[0] && date.getMinutes() >= classes[i].startTime[1]) {
            if (i+1 === classes.length) {
                return i;
            } else if ((date.getHours() + (date.getMinutes()/60)) < (classes[i+1].startTime[0] + (classes[i+1].startTime[1]/60))) {
                return i;
            }
        }
    }
    return null;
}
console.log(classes[getCurrentPeriod()].name);