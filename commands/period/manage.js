module.exports = {
    name: 'period',
    
	description: 'Display info about this server.',
	execute(message) {
        
        let classes = require('../../timeTable.json');
        message.channel.send(classes[getCurrentPeriod()].name);

            function getCurrentPeriod() {
    const date = new Date();
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
	},
};
