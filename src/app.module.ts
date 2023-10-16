import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.production', '.env.development'],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://ajitgupta9211:8604564523@cluster0.yjvmd.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
