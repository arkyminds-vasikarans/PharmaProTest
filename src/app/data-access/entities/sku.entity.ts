import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Double } from "typeorm";

@Entity()
export class Sku extends BaseEntity {

    @PrimaryGeneratedColumn()
    SkuId: number;

    @Column({unique: true})
    SkuName: string;

    @Column()
    Manufacturer: string;

    @Column({type: "double"})
    MRP: number;

    @Column({ nullable: true })
    HSN: string;

    @Column()
    GST: number;

    @Column({ nullable: true })
    Formula: number;

}