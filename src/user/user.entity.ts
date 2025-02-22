import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {hash} from 'bcrypt';


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string;

    @Column({
        default:''
    })
    image:string

    @Column()
    username:string

    @Column()
    password:string

    @BeforeInsert()
    async hashPassword(){
        this.password = await hash(this.password,10)
    }
    

    

    @Column({default:''})
    bio:string
}