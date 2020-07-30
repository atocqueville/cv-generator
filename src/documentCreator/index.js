import {
  Document,
  HeightRule,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
  Table,
  TableRow,
} from "docx";
import createLeftColumn from './leftColumn';
import createRightColumn from './rightColumn';
import { noBorders } from './styles';

export default class DocumentCreator {
  constructor(styles) {
    this.doc = new Document({ styles })
  }

  create() {
    const tableRow = new TableRow({
      height: {
        height: 16826,
        rule: HeightRule.EXACT,
        cantSplit: true,
      },
      children: [
        createLeftColumn(this.doc),
        createRightColumn(this.doc),
      ],
    });

    this.doc.addSection({
      margins: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        headers: null,
        footers: null,
      },
      children: [
        new Table({
          rows: [tableRow],
          cantSplit: true,
          borders: noBorders,
        }),
        new Paragraph({
          style: "emptyPara",
        }),
      ],
    });
  }
}
