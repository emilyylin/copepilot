const { DateTime } = require("luxon")

function getNYCTimeData(timestamp) {

    const dt = DateTime.fromMillis(timestamp, { zone: "America/New_York" });
    
    // 'Monday', 'Tuesday', etc.
    const day = dt.toFormat('cccc');
  
    // get hour in 24-hour format
    const hour = dt.hour;
  
    return { day, hour };

}

module.exports = { getNYCTimeData }