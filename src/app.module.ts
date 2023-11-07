import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitlesModule } from './titles/titles.module';

@Module({
  imports: [TitlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
