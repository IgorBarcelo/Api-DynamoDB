import dynamoDB from '../database/dynamo';
import { Product } from '../models/product.model';

const TABLE_NAME = 'Product';

export const createProduct = async (product: Product) => {
  const params = {
    TableName: TABLE_NAME,
    Item: product,
  };
  await dynamoDB.put(params).promise();
  return product;
};

export const getProductById = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  const result = await dynamoDB.get(params).promise();
  return result.Item as Product | undefined;
};

export const updateProduct = async (product: Product) => {
  const params = {
    TableName: TABLE_NAME,
    Item: product,
  };
  await dynamoDB.put(params).promise();
  return product;
};

export const deleteProduct = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  await dynamoDB.delete(params).promise();
};

export const listProducts = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const result = await dynamoDB.scan(params).promise();
  return result.Items as Product[];
};
