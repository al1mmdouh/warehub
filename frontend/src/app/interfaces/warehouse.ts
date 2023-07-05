export interface Warehouse {
    warehouseName: string,
    ownerName: string,
    ownerEmail: string,
    address: string,
    availableCapacity: number,
    capacity: number,
    lastMileName?: string,
    lastMileTax?: number,
    earning: number,
    serviceFee: number,
    warhouseType?: string
}
