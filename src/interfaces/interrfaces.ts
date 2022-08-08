export interface CustomerInterface {
    name: string;
    card: string;
    email: string;
    password: string;
}

export interface PurchaseInterface {
    productName: string;
    quantity: number;
    total: number;
    date: string;
}