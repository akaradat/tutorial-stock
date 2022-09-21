import db from '../db';

const TABLE_NAME = 'products';

/**
 * Product model.
 */
class Product extends db.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }
}

export default Product;
