import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsString, Length } from "class-validator";

export default class testApi{

    @Type(() => Number)
    @IsNumber({},{ message: 'Id must be a number !' })
    id: number;

    @IsString({ message: 'Name must be string !' })
    @Length(4,13,{message: "Name should be of min of 4 chars and max of 13 !"})
    name: string;

    @IsEmail({}, { message: 'Invalid email address !' })
    email: string;


}