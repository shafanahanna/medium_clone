import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
    findAll():{
        id: number;
        name: string;
    }[]{
        return[
            {id: 1, name: 'tag1'},
            {id: 2, name: 'tag2'},
            {id: 3, name: 'tag3'},
        ]
    }
}
