import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Ingredient{
    @PrimaryGeneratedColumn()
    id

    @Column()
    name
}