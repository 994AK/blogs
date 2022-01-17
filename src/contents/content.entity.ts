import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Comment } from '../comments/comments.entity';
import { Class } from '../classify/class.entity';
import { Tag } from '../tag/tag.entity';

enum TypeContent {
  ARTICLE = 'article',
  PAGE = 'page',
}

@Entity()
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'text',
  })
  content: string;

  @Column({
    comment: '内容概览',
  })
  contentOutline: string;

  @Column({
    comment: '头图',
  })
  firstPicture: string;

  @Column({
    type: 'enum',
    enum: TypeContent,
    default: TypeContent.ARTICLE,
  })
  type: string;

  @Column({
    type: 'enum',
    comment: '内容类型 publish - 发布 ,  draft - 草稿,  del - 删除',
    enum: ['publish', 'draft', 'del'],
    default: 'publish',
  })
  status: string;

  @Column()
  views: number;

  @Column({
    comment: '版权开启 true - 不开启 , false - 开启',
    default: true,
  })
  shareStatement: boolean;

  @Column({
    comment: '评论开启 true - 开启 , false - 禁用',
    default: true,
  })
  isCommentOpen: boolean;

  @Column({
    comment: '是否置顶 true - 置顶 , false - 不置顶',
    default: true,
  })
  isTop: boolean;

  @Column()
  likeNum: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => Comment, (comment) => comment.content)
  comments: Comment[];

  @OneToOne(() => Class, (_class) => _class.id)
  class: Class;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
