import { stock, products } from "./index";

class Calc {
  avarage() {
    const Aves = [];

    products.map((_product) => {
      const filterStock = [];
      stock.filter((product) => {
        if (product.productcode === _product) {
          filterStock.push(product);
        }
      });

      var numItems = 0;
      var totalAmount = 0;
      filterStock.map((cal) => {
        numItems = cal.itemNum + numItems;
        totalAmount = cal.price + totalAmount;
      });
      const ave = totalAmount / numItems;
      const _PRODUCT = {
        productcode: _product,
        ave: ave.toFixed(2),
        item: numItems,
      };

      if(ave>0)
        Aves.push(_PRODUCT);
    });

    return Aves;
  }
}

export default new Calc();
