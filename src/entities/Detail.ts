import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PurchaseRequest } from "./PurchaseRequest";

@Entity("details")
export class Detail {
  @PrimaryGeneratedColumn("uuid")
  itemId?: string;

  @Column({ type: "float" })
  quantity: number;

  @Column()
  measurement: string;

  @ManyToOne(() => PurchaseRequest, (prequest) => prequest.details)
  @JoinColumn({ name: "prequestId" })
  prequest: PurchaseRequest;
}