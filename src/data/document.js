import { AlignmentType, Document, HeadingLevel, Paragraph, TabStopPosition, TabStopType, TextRun, Table, TableRow, TableCell, WidthType } from "docx";
const PHONE_NUMBER = "07534563401";
const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
const EMAIL = "docx@docx.com";

export class DocumentCreator {
    // tslint:disable-next-line: typedef
    create([experiences, educations, skills, achivements]) {
        const document = new Document({
            styles: {
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
                            color: "red"
                        },
                        paragraph: {
                            spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
                            rightTabStop: TabStopPosition.MAX,
                            leftTabStop: 453.543307087,
                        },
                    },
                ]
            }
        });

        const tableRow = new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 35,
                        type: WidthType.PERCENTAGE,
                    },
                    shading: {
                        fill: "#05BEC0"
                    },
                    children: [
                        new Paragraph({
                            text: "Dolan Miu",
                            heading: HeadingLevel.TITLE,
                        }),
                        this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL)
                    ],
                }),
                new TableCell({
                    width: {
                        size: 65,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        this.createHeading("Education"),
                        ...educations
                            .map((education) => {
                                const arr = [];
                                arr.push(
                                    this.createInstitutionHeader(education.schoolName, `${education.startDate.year} - ${education.endDate.year}`),
                                );
                                arr.push(this.createRoleText(`${education.fieldOfStudy} - ${education.degree}`));
        
                                const bulletPoints = this.splitParagraphIntoBullets(education.notes);
                                bulletPoints.forEach((bulletPoint) => {
                                    arr.push(this.createBullet(bulletPoint));
                                });
        
                                return arr;
                            })
                            .reduce((prev, curr) => prev.concat(curr), []),
                    ],
                }),
            ],
        });

        const table = new Table({
            rows: [tableRow],
            cantSplit: true,
        });

        document.addSection({
            margins: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                headers: null,
                footers: null
            },
            children: [table],
        });

        return document;
    }

    createContactInfo(phoneNumber, profileUrl, email) {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun(`Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`),
                new TextRun("Address: 58 Elm Avenue, Kent ME4 6ER, UK").break(),
            ],
        });
    }

    createHeading(text) {
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_1,
            thematicBreak: true,
            style: "normalPara",
        });
    }

    createSubHeading(text) {
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_2,
        });
    }

    createInstitutionHeader(institutionName, dateText) {
        return new Paragraph({
            tabStops: [
                {
                    type: TabStopType.RIGHT,
                    position: TabStopPosition.MAX,
                },
            ],
            children: [
                new TextRun({
                    text: institutionName,
                    bold: true,
                }),
                new TextRun({
                    text: `\t${dateText}`,
                    bold: true,
                }),
            ],
        });
    }

    createRoleText(roleText) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: roleText,
                    italics: true,
                }),
            ],
        });
    }

    createBullet(text) {
        return new Paragraph({
            text: text,
            bullet: {
                level: 0,
            },
        });
    }

    // tslint:disable-next-line:no-any
    createSkillList(skills) {
        return new Paragraph({
            children: [new TextRun(skills.map((skill) => skill.name).join(", ") + ".")],
        });
    }

    // tslint:disable-next-line:no-any
    createAchivementsList(achivements) {
        return achivements.map(
            (achievement) =>
                new Paragraph({
                    text: achievement.name,
                    bullet: {
                        level: 0,
                    },
                }),
        );
    }

    createInterests(interests) {
        return new Paragraph({
            children: [new TextRun(interests)],
        });
    }

    splitParagraphIntoBullets(text) {
        return text.split("\n\n");
    }

    // tslint:disable-next-line:no-any
    createPositionDateText(startDate, endDate, isCurrent) {
        const startDateText = this.getMonthFromInt(startDate.month) + ". " + startDate.year;
        const endDateText = isCurrent ? "Present" : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

        return `${startDateText} - ${endDateText}`;
    }

    getMonthFromInt(value) {
        switch (value) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sept";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
            default:
                return "N/A";
        }
    }
}