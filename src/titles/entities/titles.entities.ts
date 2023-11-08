import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Title {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  name: string;

  @Column("boolean")
  isActivated: boolean;

  @Column("date")
  createdAt: Date;

  @Column("date")
  updatedAt: Date;

  @Column("date")
  deletedAt: Date;
}