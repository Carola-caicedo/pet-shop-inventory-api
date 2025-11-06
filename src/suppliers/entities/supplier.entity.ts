import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('suppliers')
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nombre: string;

    @Column({ length: 100 })
    contacto: string;

    @Column({ length: 20 })
    telefono: string;

    @Column({ length: 100 })
    email: string;

    @Column('text')
    direccion: string;

    @Column({ default: true })
    activo: boolean;

    @CreateDateColumn()
    fecha_creacion: Date;

    @UpdateDateColumn()
    fecha_actualizacion: Date;
}