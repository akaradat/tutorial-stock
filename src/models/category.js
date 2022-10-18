import db from '../db';

const TABLE_NAME = 'categories';

class Category extends db.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

export default Category;
