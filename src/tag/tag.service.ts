import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagService {
    constructor(@InjectRepository(Tag) private readonly tagRepository: Repository<Tag>){}
    findAll():Promise<Tag[]>{
       return this.tagRepository.find() ;
    
    }
}
