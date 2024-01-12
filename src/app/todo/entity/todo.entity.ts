import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'todos' })
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @ApiProperty()
    task: string;

    @Column({name: 'is_done', type: 'tinyint', width: 1})
    @ApiProperty()
    isDone: number;

    @CreateDateColumn({name: 'created_at'})
    @ApiProperty()
    createAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    @ApiProperty()
    updateAt: string;

    @DeleteDateColumn({name: 'deleted_at'})
    @ApiProperty()
    deleteAt: string;

    constructor (todo?: Partial<TodoEntity>) {
        todo.id = todo?.id;
        todo.task = todo?.task;
        todo.isDone = todo?.isDone;
        todo.createAt = todo?.createAt;
        todo.updateAt = todo?.updateAt;
        todo.deleteAt = todo?.deleteAt;
    }
}