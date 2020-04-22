//awalnya
// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
//  }
class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    // awalnya
    // DataSource.prototype.searchClub = function(keyword) {
    //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

    //     if (filteredClubs.length) {
    //         this.onSuccess(filteredClubs);
    //     } else {
    //         this.onFailed(`${keyword} is not found`);
    //     }
    // };

    searchClub(keyword) {
        const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

        if (filteredClubs.length) {
            this.onSuccess(filteredClubs);
        } else {
            this.onFailed(`${keyword} is not found"`);
        }
    }
}