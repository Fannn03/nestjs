import { Injectable } from '@nestjs/common';
import { Title } from './entities/titles.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TitlesService {
  constructor (
    @InjectRepository(Title)
    private titlesRepository: Repository<Title>
  ) {}

  findAll (): Promise<Title[]> {
    return this.titlesRepository.find()
  }
}
