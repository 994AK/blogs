import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class SMTP {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column({ type: 'text', default: null })
  subject: string;

  @Column({ type: 'text', default: null })
  text: string;

  @Column({
    comment: 'true 成功  | false 失败',
  })
  isSuccess: boolean; // 是否发送成功

  @Column({
    type: 'bigint',
  })
  createTime: number;

  @BeforeInsert()
  createDates() {
    this.createTime = Date.now();
  }
}
