import {DataSource} from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'Patryk',
    password: 'Szkola89!',
    database: 'recipes',
    entities: [],
    mutations: [],
    subscribers: [],
});