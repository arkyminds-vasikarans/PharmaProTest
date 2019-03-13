import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Double } from "typeorm";

@Entity()
export class Stock extends BaseEntity {

    @PrimaryGeneratedColumn()
    StockId: number;

    @Column()
    SkuId: string;

    @Column()
    Stock: number;

    @Column()
    BatchNo: number;

    @Column({ type: 'date' })
    MfgDate: string;

    @Column({ type: 'date' })
    ExpiryDate: string;

    @Column({
        type: "varchar",
        length: 150,
        default: "A"
    })
    Status: string;

}