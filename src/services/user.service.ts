import { User } from '../models/user.model';
import dynamoDB from '../database/dynamo';

const TABLE_NAME = 'User';

export const createUser = async (user: User) => {
  const params = {
    TableName: TABLE_NAME,
    Item: user,
  };
  await dynamoDB.put(params).promise();
  return user;
};

export const getUserById = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  const result = await dynamoDB.get(params).promise();
  return result.Item as User | undefined;
};

export const updateUser = async (user: User) => {
  const params = {
    TableName: TABLE_NAME,
    Item: user,
  };
  await dynamoDB.put(params).promise();
  return user;
};

export const deleteUser = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  await dynamoDB.delete(params).promise();
};

export const listUsers = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const result = await dynamoDB.scan(params).promise();
  return result.Items as User[];
};
