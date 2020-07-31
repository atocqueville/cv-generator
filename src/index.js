import * as fs from "fs";
import { Packer } from "docx";

import DocumentCreator from "./documentCreator";
import styles from './documentCreator/styles';

const documentCreator = new DocumentCreator(styles);
documentCreator.create();

Packer.toBuffer(documentCreator.doc).then((buffer) => {
  fs.writeFileSync("cv.docx", buffer);
});