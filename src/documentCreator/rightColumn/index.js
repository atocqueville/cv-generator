import {
  TableCell,
  Paragraph,
  WidthType,
  HeadingLevel,
} from "docx";

export default function(document) {
  return new TableCell({
    width: {
      size: 65,
      type: WidthType.PERCENTAGE,
    },
    children: [
      new Paragraph({
        text: "cece pd",
        heading: HeadingLevel.HEADING_1,
      })
    ]
  })
}