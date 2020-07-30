import { BorderStyle, TabStopPosition } from "docx";

export const noBorders = {
  top: {
    style: BorderStyle.NONE,
    size: 0,
    color: "",
  },
  bottom: {
    style: BorderStyle.NONE,
    size: 0,
    color: "",
  },
  right: {
    style: BorderStyle.NONE,
    size: 0,
    color: "",
  },
  left: {
    style: BorderStyle.NONE,
    size: 0,
    color: "",
  },
}

export default {
  paragraphStyles: [
    {
      id: "normalPara",
      name: "Normal Para",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: {
        font: "Calibri",
        size: 26,
        bold: true,
        color: "red",
      },
      paragraph: {
        spacing: {
          line: 276,
          before: 20 * 72 * 0.1,
          after: 20 * 72 * 0.05,
        },
        rightTabStop: TabStopPosition.MAX,
        leftTabStop: 453.543307087,
      },
    },
    {
      id: "name",
      name: "name",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: {
        font: "Calibri",
        size: 36,
        bold: true,
        color: "white",
      },
    },
    {
      id: "job",
      name: "job",
      basedOn: "Normal",
      next: "Normal",
      quickFormat: true,
      run: {
        font: "Calibri",
        size: 36,
        color: "white",
      },
    },
    {
      id: "emptyPara",
      name: "empty",
      basedOn: "Normal",
      next: "Normal",
      run: {
        size: 1,
      },
    },
  ]
}