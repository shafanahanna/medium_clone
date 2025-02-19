import { DataSource } from 'typeorm';
import { Tag } from './tag/tag.entity';
import { User } from './user/user.entity';

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'medium',
    entities:  [Tag,User], 
    synchronize:false,
    migrations:['dist/migrations/*{.ts,.js}']
});