import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum PetSpecies {
    PERRO = 'perro',
    GATO = 'gato',
    AVE = 'ave',
    ROEDOR = 'roedor',
    PEZ = 'pez',
    REPTIL = 'reptil'
}

@Entity('pets')
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({
        type: 'enum',
        enum: PetSpecies
    })
    especie: PetSpecies;

    @Column({ length: 100 })
    raza: string;

    @Column()
    edad: number;

    @Column({ length: 100 })
    duenio_nombre: string;

    @Column({ length: 20 })
    duenio_telefono: string;

    @Column({ length: 100 })
    duenio_email: string;

    @Column('text', { nullable: true })
    observaciones: string;

    @CreateDateColumn()
    fecha_registro: Date;
}