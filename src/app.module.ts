import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieRoomModule } from './movieRoom/movieRoom.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://user:user1234@cluster0.fpz6jvx.mongodb.net/dbTest?retryWrites=true&w=majority'), MovieRoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
