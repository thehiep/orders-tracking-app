class Pagination {
    numberItemPerPage: number = 10;
    totalItems: number;
    constructor(totalItems: number) {
        this.totalItems = totalItems;
    }
    visible=true;

}


export default Pagination;