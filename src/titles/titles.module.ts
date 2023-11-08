import { Module } from '@nestjs/common';
import { TitlesService } from './titles.service';
import { TitlesController } from './titles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Title } from './entities/titles.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Title
    ])
  ],
  controllers: [TitlesController],
  providers: [TitlesService],
})
export class TitlesModule {}
