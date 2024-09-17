export default class ApiResponse {
    private success: boolean = this.statusCode < 400
    constructor(
        private statusCode: number,
        private message: string,
        private data: Object
    ){}

}