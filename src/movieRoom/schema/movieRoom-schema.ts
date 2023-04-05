import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose'

export type RoundDocument = Round & mongoose.Document

@Schema({ collection: 'rounds' })
export class Round {
	@Prop()
	movieName: string
	@Prop()
	startTime: number
	@Prop()
	endTime: number
}
export const RoundSchema = SchemaFactory.createForClass(Round)

export type MovieRoomDocument = MovieRoom & mongoose.Document

@Schema({ collection:'movieRooms'})
export class MovieRoom{
	@Prop()
	roomName: string
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: Round.name })//請用.name,大小寫+s真他媽智障
	Rid: Round
}
export const MovieRoomSchema = SchemaFactory.createForClass(MovieRoom)