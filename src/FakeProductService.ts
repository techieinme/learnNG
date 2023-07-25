export class FakeProductService {

  public getProducts() {
    let products: object[];
    products = [
      { id:1, name:'Memory Card', number: 500 },
      { id:2, name:'Pen Drive', number: 750 },
      { id:3, name:'Power Bank', number: 100 },
      { id:4, name:'Laptop', number: 1000 },
      { id:5, name:'Desktop',number:  10 }
    ];

    return products;
  }
}
