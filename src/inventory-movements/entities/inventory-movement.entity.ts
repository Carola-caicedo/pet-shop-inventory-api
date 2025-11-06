import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

export enum MovementType {
    ENTRADA = 'entrada',
    SALIDA = 'salida'
}

@Entity('inventory_movements')
export class InventoryMovement {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, product => product.id)
    @JoinColumn({ name: 'producto_id' })
    producto: Product;

    @Column({
        type: 'enum',
        enum: MovementType
    })
    tipo: MovementType;

    @Column()
    cantidad: number;

    @Column({ length: 200 })
    motivo: string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'usuario_id' })
    usuario: User;

    @CreateDateColumn()
    fecha: Date;

    @Column({ nullable: true })
    producto_id: number;

    @Column({ nullable: true })
    usuario_id: number;
}