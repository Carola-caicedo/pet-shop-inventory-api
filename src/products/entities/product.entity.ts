import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column({ default: 0 })
    stock: number;

    @Column({ default: 5 })
    stock_minimo: number;

    @Column({ length: 100 })
    proveedor: string;

    @Column({ default: true })
    activo: boolean;

    @CreateDateColumn()
    fecha_creacion: Date;

    @UpdateDateColumn()
    fecha_actualizacion: Date;

    // Relación con Categoría
    @Column({ nullable: true })
    categoria_id: number;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: 'categoria_id' })
    categoria: Category;
}