import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'root',
    port: 5433,
    host:'127.0.0.1',
    database: 'stocks_CAN_db',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']

}