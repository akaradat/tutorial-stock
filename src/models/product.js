import db from '../db';

const TABLE_NAME = 'products';

class Product extends db.Model {

  get tableName() {
    return TABLE_NAME;
  }
}

export default Product;
