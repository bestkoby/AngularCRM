export interface Product{
    Id:number,
    Name:string,
    SupplierId:string,
    CategoryId:string,
    QuantityPerUnit:number,
    UnitPrice:number,
    UnitsInStock:number,
    ReorderLevel:number,
    Discontinued:boolean
}