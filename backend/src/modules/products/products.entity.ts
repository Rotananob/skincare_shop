// TODO: Implement Products Entity when database phase begins
// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * @Entity('products')
 * Product entity for PostgreSQL via TypeORM
 */
export class Product {
  // @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column({ unique: true })
  slug: string;

  // @Column()
  nameKm: string;

  // @Column()
  nameEn: string;

  // @Column('text')
  descriptionKm: string;

  // @Column('text')
  descriptionEn: string;

  // @Column()
  brand: string;

  // @Column()
  category: string;

  // @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  // @Column('decimal', { precision: 10, scale: 2, nullable: true })
  discountPrice?: number;

  // @Column()
  image: string;

  // @Column({ default: 0 })
  stock: number;

  // @Column('simple-array')
  skinTypes: string[];

  // @Column('simple-array')
  concerns: string[];

  // @Column('decimal', { precision: 3, scale: 2, default: 0 })
  rating: number;

  // @Column({ default: 0 })
  reviewCount: number;

  // @Column({ default: false })
  bestSeller: boolean;

  // @Column({ default: false })
  featured: boolean;

  // @Column({ default: false })
  newArrival: boolean;

  // @CreateDateColumn()
  createdAt: Date;

  // @UpdateDateColumn()
  updatedAt: Date;
}
