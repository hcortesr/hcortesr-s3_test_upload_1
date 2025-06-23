import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

// En el "Item" debe estar el partition name
docClient.send(new PutCommand({
  TableName: "EspressoDrinks",
  Item: { DrinkName: "abc", score: 100 },
}));