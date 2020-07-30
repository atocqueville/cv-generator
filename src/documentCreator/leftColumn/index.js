import * as fs from "fs";
import {
  AlignmentType,
  HeadingLevel,
  Paragraph,
  TableCell,
  WidthType,
  Media,
  TextRun,
  Table,
  TableRow,
} from "docx";
import { noBorders } from "../styles";

export default function(document) {
  const photo = Media.addImage(
    document,
    fs.readFileSync("src/documentCreator/images/chien.png"),
    200,
    200,
    {}
  );

  const contact = Media.addImage(
    document,
    fs.readFileSync("src/documentCreator/images/contact.png"),
    40,
    40,
    {}
  );

  return new TableCell({
    width: {
      size: 35,
      type: WidthType.PERCENTAGE,
    },
    shading: {
      fill: "#05BEC0",
    },
    children: [
      new Paragraph({
        children: [photo],
        alignment: AlignmentType.CENTER,
        spacing: {
          before: 450,
          after: 450,
        },
      }),
      new Paragraph({
        text: "ALEXANDRE DE TOCQUEVILLE",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        style: "name",
        spacing: {
          before: 80,
          after: 80,
        },
        border: {
          bottom: {
            color: "white",
            size: 20,
            space: 1,
            value: "single",
          }
        },
      }),
      new Paragraph({
        text: "WEB DEVELOPER",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
        style: "job",
        spacing: {
          after: 700
        }
      }),
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({ children: [contact], indent: { left: 500 } })
                ]
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: "Contact",
                    style: "leftHeader",
                    heading: HeadingLevel.HEADING_3,
                    indent: { left: 150 },
                    spacing: {
                      before: 100
                    }
                  })
                ]
              }),
            ],
          })
        ],
        cantSplit: true,
        borders: noBorders,
      }),
    ],
  })
} 