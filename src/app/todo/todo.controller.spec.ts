import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoEntity } from './entity/todo.entity';

const TodoEntityList: TodoEntity[] = [
  new TodoEntity({id: '1', task: 'task-1', isDone: 0}),
  new TodoEntity({id: '2', task: 'task-2', isDone: 1}),
  new TodoEntity({id: '3', task: 'task-3', isDone: 0}),
];

describe('TodoControlerController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(TodoEntityList),
            create: jest.fn(),
            findOneOrFail: jest.fn(),
            update: jest.fn(),
            daleteById: jest.fn(),
          }
        }
      ]
    }).compile();

    todoController = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService)
  });

  it('should be defined', () => {
    expect(todoController).toBeDefined();
    expect(todoService).toBeDefined();
  });

  describe('index', () =>
    it('shoud return a todo list entity sucessfuly', async () => {
      // Act
      const result = await todoController.index()

      
      // Assert
      expect(result).toEqual(TodoEntityList)
      expect(typeof result).toEqual('object')
      expect(todoService.findAll).toHaveBeenCalled(1)
    })

    it('')
  )
});
