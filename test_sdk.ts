import { readFileSync } from "node:fs"; // o "fs"

import {
  S3Client,
  CreateBucketCommand,
  PutObjectCommand,
  ListObjectsCommand,
  CopyObjectCommand,
  GetObjectCommand,
  DeleteObjectsCommand,
  DeleteBucketCommand,
} from "@aws-sdk/client-s3";


const s3Client = new S3Client();

const contenido = readFileSync("./hola.txt", "hex");
console.log(contenido);

// const obj_cb = new CreateBucketCommand({
//     Bucket: "hcr-hcr"
// })
// s3Client.send(obj_cb);

s3Client.send(new PutObjectCommand({
    Bucket: 'hcr-hcr',
        Body: contenido,
        Key: "hola/contenido",
}))