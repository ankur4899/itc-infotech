module.exports = {

    //Sort based on average votes
    compare: (a, b) => {
        const averageVoteA = a.averageVotes
        const averageVoteB = b.averageVotes

        let comparison = 0;
        if (averageVoteA > averageVoteB) {
            comparison = 1;
        } else if (averageVoteA < averageVoteB) {
            comparison = -1;
        }
        return comparison * -1;
    },

    //Get Days Difference between two dates
    getDaysDifference: (updatedDate) => {
        var date1 = new Date();
        var date2 = new Date(updatedDate);
        var Difference_In_Time = date1.getTime() - date2.getTime();

        // To calculate the no. of days between two dates 
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days;
    }
}