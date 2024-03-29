export interface Product {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  item: {
    quantity: number;
    option: string;
  };
}

export const products = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: '10 boxes x 20 bags',
    UnitPrice: 18.0,
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: '24 - 12 oz bottles',
    UnitPrice: 19.0,
    UnitsInStock: 17,
    UnitsOnOrder: 40,
    ReorderLevel: 25,
    Discontinued: false,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    SupplierID: 1,
    CategoryID: 2,
    QuantityPerUnit: '12 - 550 ml bottles',
    UnitPrice: 10.0,
    UnitsInStock: 13,
    UnitsOnOrder: 70,
    ReorderLevel: 25,
    Discontinued: false,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: '48 - 6 oz jars',
    UnitPrice: 22.0,
    UnitsInStock: 53,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
  },
  {
    ProductID: 5,
    ProductName: "Chef Anton's Gumbo Mix",
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: '36 boxes',
    UnitPrice: 21.35,
    UnitsInStock: 0,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
  {
    ProductID: 6,
    ProductName: "Grandma's Boysenberry Spread",
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: '12 - 8 oz jars',
    UnitPrice: 25.0,
    UnitsInStock: 120,
    UnitsOnOrder: 0,
    ReorderLevel: 25,
    Discontinued: false,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
  {
    ProductID: 7,
    ProductName: "Uncle Bob's Organic Dried Pears",
    SupplierID: 3,
    CategoryID: 7,
    QuantityPerUnit: '12 - 1 lb pkgs.',
    UnitPrice: 30.0,
    UnitsInStock: 15,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
  {
    ProductID: 8,
    ProductName: 'Northwoods Cranberry Sauce',
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: '12 - 12 oz jars',
    UnitPrice: 40.0,
    UnitsInStock: 6,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    item: {
      quantity: 15,
      option: 'two',
    },
  },
];
