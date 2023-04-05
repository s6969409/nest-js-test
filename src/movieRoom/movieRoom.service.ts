import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Round, RoundDocument,MovieRoom,MovieRoomDocument } from './schema/movieRoom-schema';

@Injectable()
export class RoundService {//資料庫Round增刪查改
    constructor(@InjectModel(Round.name) private roundModel:Model<RoundDocument>){}

    async getAll(){
        return await this.roundModel.find().exec();
    }

    async create(round:Round){
        const newModel = new this.roundModel(round)
        return await newModel.save()
    }

    async getById(id:string){
        return await this.roundModel.findById(id).exec()
    }

    async update(id:string, round:Round){
        return await this.roundModel.findByIdAndUpdate(id, round, {new: true})
    }

    async delete(id:string){
        return await this.roundModel.findByIdAndRemove(id)
    }
}

@Injectable()
export class MovieRoomService{//資料庫MovieRoom操作
    constructor(@InjectModel(MovieRoom.name) private movieRoomModel:Model<MovieRoomDocument>){}

    async getAll(){
        return await this.movieRoomModel.find().exec()
    }

    async getAll2(){//資料庫populate
        return this.movieRoomModel.find().populate('Rid').exec()
    }
}