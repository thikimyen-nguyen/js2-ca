// Function to calculate and display time ago
function timeAgo(dateString) {
    const currentDate = new Date();
    const postDate = new Date(dateString);
    const timeDifference = currentDate - postDate;
    
    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
  
    if (timeDifference < minute) {
      return 'Just now';
    } else if (timeDifference < hour) {
      const minutesAgo = Math.floor(timeDifference / minute);
      return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifference < day) {
      const hoursAgo = Math.floor(timeDifference / hour);
      return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifference < week) {
      const daysAgo = Math.floor(timeDifference / day);
      return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifference < month) {
      const weeksAgo = Math.floor(timeDifference / week);
      return `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
    } else if (timeDifference < year) {
      const monthsAgo = Math.floor(timeDifference / month);
      return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
    } else {
      const yearsAgo = Math.floor(timeDifference / year);
      return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    }
  }

  export {timeAgo}