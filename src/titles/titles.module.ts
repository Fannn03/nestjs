import { Module } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { TitlesController } from './titles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Titles } from './entities/titles.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Titles
    ])
  ],
  controllers: [TitlesController],
  providers: [TitlesService],
})
export class TitlesModule {}
