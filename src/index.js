import * as fs from "fs";
import { Packer } from "docx";

import { experiences, education, skills, achievements } from "./data/categories.js";
import { DocumentCreator } from "./data/document.js";

const documentCreator = new DocumentCreator();
const doc = documentCreator.create([
  experiences,
  education,
  skills,
  achievements
]);

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("cv.docx", buffer);
});