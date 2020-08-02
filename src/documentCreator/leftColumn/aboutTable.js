import {
  HeadingLevel,
  Paragraph,
  TableCell,
  Table,
  TableRow,
  VerticalAlign,
} from "docx";
import { noBorders } from "../styles";

export default function(icon, text, subContent) {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({ children: [icon], indent: { left: 500 } })
            ],
            verticalAlign: VerticalAlign.CENTER
          }),
          new TableCell({
            children: [
              new Paragraph({
                text,
                style: "leftHeader",
                heading: HeadingLevel.HEADING_3,
                indent: { left: 150 }
              })
            ],
            verticalAlign: VerticalAlign.CENTER
          }),
        ],
        height: 150
      }),
      ...subContent.map(subRow => createSubRow(subRow))
    ],
    cantSplit: true,
    borders: noBorders,
  })
}

function createSubRow({ icon, text }) {
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({ children: [icon], indent: { left: 300 } })
        ],
        verticalAlign: VerticalAlign.CENTER
      }),
      new TableCell({
        children: [
          new Paragraph({
            text,
            style: "leftSubHeader",
            heading: HeadingLevel.HEADING_3,
            indent: { left: 50 }
          })
        ],
        verticalAlign: VerticalAlign.CENTER
      }),
    ],
    height: 150
  })
}
