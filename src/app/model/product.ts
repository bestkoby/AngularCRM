export interface Product{
    id:number,
    name:string,
    supplierId:string,
    categoryId:string,
    quantityPerUnit:number,
    unitPrice:number,
    unitsInStock:number,
    reorderLevel:number,
    discontinued:boolean
}