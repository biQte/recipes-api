import {DataSource} from 'typeorm';
import {Ingredient} from './entity/ingredient.js';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'Patryk',
    password: 'Szkola89!',
    database: 'recipes',
    entities: [Ingredient],
    mutations: [],
    subscribers: [],
});