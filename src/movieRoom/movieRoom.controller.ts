import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { RoundService,MovieRoomService } from './movieRoom.service';
import { Round } from './schema/movieRoom-schema';

@Controller('round')//'round'子路由名稱
export class RoundController {
    constructor(private roundService:RoundService){}

    @Get('/all')
    async getAll(){
        return await this.roundService.getAll();
    }

    @Post('/all')
    async create(@Body() round:Round){
        return await this.roundService.create(round)
    }

    @Get('/all/:id')
    async getById(@Param('id') id:string){
        return this.roundService.getById(id)
    }

    @Put('all/:id')
    async update(@Param('id') id:string, @Body() employee:Round){
        return this.roundService.update(id,employee)
    }

    @Delete('all/:id')
    async delete(@Param('id') id:string){
        return await this.roundService.delete(id)
    }
}

@Controller('movieRoom')//'movieRoom'子路由名稱
export class MovieRoomController {
    constructor(private movieRoomService:MovieRoomService){}
    
    @Get('/mrs')
    async getAll(){
        return await this.movieRoomService.getAll();
    }

    @Get('/mrs2')
    async getAll2(){
        return await this.movieRoomService.getAll2();
    }
}
