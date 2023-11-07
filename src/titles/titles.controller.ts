import { Controller, Get, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('titles')
export class TitlesController {
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    return res.json({
      code: 200,
      result: 'success',
      message: 'success get titles data'
    })
  }
}
