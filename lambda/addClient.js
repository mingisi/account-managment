import uuid from "uuid"
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "client",
    Item: {
      id: uuid.v1(),
      userId: event.requestContext.identity.cognitoIdentityId,
      company: data.company,
      details: data.details,
      created: Date.now(),
      modified: Date.now(),
      state: "lead"
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}