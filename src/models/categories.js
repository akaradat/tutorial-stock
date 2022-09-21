import db from '../db';

const TABLE_NAME = 'categories';

class Categories extends db.Model {
  get tableName() {
    return TABLE_NAME;
  }
}

export default Categories;
