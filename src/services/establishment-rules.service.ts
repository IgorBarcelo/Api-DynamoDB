import dynamoDB from '../database/dynamo';
import { EstablishmentRule } from '../models/establishment-rules.model';

const TABLE_NAME = 'EstablishmentRules';

export const createRule = async (rule: EstablishmentRule) => {
  const params = {
    TableName: TABLE_NAME,
    Item: rule,
  };
  await dynamoDB.put(params).promise();
  return rule;
};

export const getRuleByEstablishmentId = async (establishmentId: string) => {
  const params = {
    TableName: TABLE_NAME,
    FilterExpression: 'establishmentId = :id',
    ExpressionAttributeValues: {
      ':id': establishmentId,
    },
  };
  const result = await dynamoDB.scan(params).promise();
  return result.Items?.[0] as EstablishmentRule | undefined;
};

export const updateRule = async (rule: EstablishmentRule) => {
  const params = {
    TableName: TABLE_NAME,
    Item: rule,
  };
  await dynamoDB.put(params).promise();
  return rule;
};

export const deleteRule = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  await dynamoDB.delete(params).promise();
};
