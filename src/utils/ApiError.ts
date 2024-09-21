class ApiError extends Error
{
    constructor(
        private statusCode: number, 
        public message: string = "Something went wrong !",
        private data: object = null,
        private error: any =[],
        public stack: any ="",
        private success: boolean = false
    ) 
    {
        super(message)
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
        this.data = null;
        if(stack)
        {
            this.stack = stack;
        }else
        {
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiError}