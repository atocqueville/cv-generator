import { BorderStyle, TabStopPosition } from "docx";

export const noBorders = {
  top: { style: BorderStyle.NONE },
  bottom: { style: BorderStyle.NONE },
  right: { style: BorderStyle.NONE },
  left: { style: BorderStyle.NONE },
  insideHorizontal: { style: BorderStyle.NONE },
  insideVertical: { style: BorderStyle.NONE },
}

export default {
  paragraphStyles: [
    {
      id: "name",
      name: "name",
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
      run: {
        size: 1,
      },
    },
  ]
}