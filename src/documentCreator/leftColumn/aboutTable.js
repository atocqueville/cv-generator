import {
  HeadingLevel,
  Paragraph,
  TableCell,
  Table,
  TableRow,
  VerticalAlign,
  AlignmentType,
} from "docx";
import { noBorders } from "../styles";

export default function(icon, text, subContent) {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({ children: [icon] })
            ],
            verticalAlign: VerticalAlign.CENTER
          }),
          new TableCell({
            children: [
              new Paragraph({
                text,
                style: "leftHeader",
                heading: HeadingLevel.HEADING_3
              })
            ],
            verticalAlign: VerticalAlign.CENTER
          }),
        ],
        height: {
          height: 700,
          rule: "exact"
        }
      }),
      ...subContent.map(subRow => createSubRow(subRow))
    ],
    alignment: "center",
    cantSplit: true,
    borders: noBorders,
  })
}

function createSubRow({ icon, text }) {
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({ children: [icon], alignment: AlignmentType.CENTER })
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        children: [
          new Paragraph({
            text,
            style: "leftSubHeader",
            heading: HeadingLevel.HEADING_3
          })
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
    ],
    height: {
      height: 550,
      rule: "exact"
    }
  })
}
