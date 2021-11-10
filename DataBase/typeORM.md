```javascript 
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
```
### TypeORM ?
1. ORM 이란 ?
    - object-relational mapping 객체 - 관계 매핑 을 말한다.
    - 즉, 객체와 관계형 데이터 베이스의 데이터를 자동으로 매핑(연결)해준다.
    - 객체 지향 프로그래밍은 클래스를 사용하고, 관계형 데이터베이스는 테이블을 사용한다.
    - 객체 모델과 관계형 모델 간에 불일치가 존재한다 따라서, ORM 을 통해 객체 간 관계를 바탕으로 SQL 을 자동으로 생성하여 불일치를 해결한다.

2. Express 와 관계형 데이터베이스를 조합할 때, 자주 사용된다. (  ORM - Sequelize 도 있다. )
3. Sequelize 와 TypeORM 중 어떤 ORM을 사용할지 선택해본다.
    - TypeORM 선택 이유 ? 
        1. 모델의 정의를 제대로 하면 타입을 정하는 메리트를 최대한 얻을 수 있다.
        2. 복잡한 모델 간의 관계를 형성할 수 있다.


2. Active Record 패턴?
- 모델 그 자체에 쿼리 메소드를 정의하고, 모델의 메소드를 사용하여 객체를 저장, 제거, 불러오는 방식이다.
```javascript
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    isActive : boolean;

    static findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder('user')
            .where('user.firstName = :firstName', { firstName })
            .andWhere('user.lastName = :lastName', { lastName })
            .getMany();
    }
}

// Example How to save AR entity
const user = new User();

user.firstName = "Timber";
user.lastName = "Saw";
user.isActive = true;

await user.save();

// Example How to remove AR entity
await user.remove();

// Example How to load AR entities
const users = await User.find({ skip: 2, take: 5 });
const newUsers = await User.find({ isActive : true });
const timber = await User.findOne({ firstName : "Timber", lastName : "Saw" });

const timber = await User.findByName("Timber","Saw");

```

3. DATA Mapper 패턴
- 분리된 클래스에 쿼리 메소드를 정의하는 방식이며, Repository 를 이용하여 객체를 저장, 제거, 불러온다.
Active Record 패턴과의 차이점은 모델에 접근하는 방식이 아닌, Repository 에서 데이터에 접근 한다는 것이다.

```javascript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column()
    isActive : boolean;
}

// 정의한 클래스를 Generic 타입을 사용하여 상속하게 한다.
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/User';

@EntityRepository()
export class UserRepository extends Repository<User> {

    findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder('user')
            .where('user.firstName = :firstName', { firstName })
            .andWhere('user.lastName = :lastName', { lastName })
            .getMany();
    }
}

// getRepository()

const userRepository = connection.getRepository(User);

// Example How to save DM Entity
const user = new User();

user.firstName = "Timber";
user.lastName = "Saw";
user.isActive = true;

await userRepository.save(user);

await userRepository.remove(user);

const users = await userRepository.find({ skip : 2, take : 5 });

```

4. Active Record VS Data Mapper

- 규모가 작은 애플리케이션에 적합하고 간단히 사용 가능 - AR
- 규모가 큰 애플리케이션에 적합 유지보수에 효과적 - DM