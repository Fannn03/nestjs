import { Controller, Get, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';
import { Title } from './entities/titles.entities';
import { TitlesService } from './titles.service';

@Controller('titles')
export class TitlesController {
  constructor (private titlesService: TitlesService) {}
  
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const titles: Title[] = await this.titlesService.findAll()

    return res.json({
      code: 200,
      result: 'success',
      message: 'success get titles data',
      data: titles
    })
  }
}
