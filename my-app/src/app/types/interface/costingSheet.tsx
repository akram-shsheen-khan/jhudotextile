export interface CostingSheetI {
  _id: string;
  dyeingdate: String;
  lotno: String;
  partyname: String;
  color: String;
  quality: String;
  pono: String;
  process: String;

  weightkg: Number;
  halfbleachcost: Number;
  dyescost: Number;
  dyeingchemicalcost: Number;
  totalcost: Number;
}
