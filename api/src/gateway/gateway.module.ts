import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Device, DeviceSchema } from './schemas/device.schema'
import { GatewayController } from './gateway.controller'
import { GatewayService } from './gateway.service'
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'
import { SMS, SMSSchema } from './schemas/sms.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Device.name,
        schema: DeviceSchema,
      },
      {
        name: SMS.name,
        schema: SMSSchema,
      },
    ]),
    AuthModule,
    UsersModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
  exports: [MongooseModule, GatewayService],
})
export class GatewayModule {}
