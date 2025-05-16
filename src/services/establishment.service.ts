import dynamoDB from '../database/dynamo';
import { Establishment } from '../models/establishment.model';

const TABLE_NAME = 'Establishment';

export const createEstablishment = async (est: Establishment) => {
  const params = {
    TableName: TABLE_NAME,
    Item: est,
  };
  await dynamoDB.put(params).promise();
  return est;
};

export const getEstablishmentById = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  const result = await dynamoDB.get(params).promise();
  return result.Item as Establishment | undefined;
};

export const updateEstablishment = async (est: Establishment) => {
  const params = {
    TableName: TABLE_NAME,
    Item: est,
  };
  await dynamoDB.put(params).promise();
  return est;
};

export const deleteEstablishment = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  await dynamoDB.delete(params).promise();
};

export const listEstablishments = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const result = await dynamoDB.scan(params).promise();
  return result.Items as Establishment[];
};

export const findByType = async (type: string) => {
  const params = {
    TableName: TABLE_NAME,
    FilterExpression: '#type = :type',
    ExpressionAttributeNames: { '#type': 'type' },
    ExpressionAttributeValues: { ':type': type },
  };
  const result = await dynamoDB.scan(params).promise();
  return result.Items as Establishment[];
};
