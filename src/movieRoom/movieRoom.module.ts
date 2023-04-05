import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { RoundSchema,MovieRoomSchema, Round, MovieRoom  } from './schema/movieRoom-schema';
import { RoundService,MovieRoomService } from './movieRoom.service';
import { RoundController,MovieRoomController } from './movieRoom.controller';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:Round.name,
            schema: RoundSchema
        }]),
        MongooseModule.forFeature([{
            name:MovieRoom.name,
            schema: MovieRoomSchema
        }])
    ],
    providers: [RoundService,MovieRoomService],
    controllers: [RoundController,MovieRoomController]
})
export class MovieRoomModule {}