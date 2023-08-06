import { z } from "zod";

const programmesPDFsSchema = z.object({
  /** An id for the programme PDF */
  id: z.number(),

  /** A URL from public folder for the PDF
   *
   * Example: /images/pdf/rrr.pdf
   */
  pdfUrl: z.string(),

  /** Image for the type of training. It should be provided as svg. */
  pdfImageSrc: z.string(),
});

const programmesPDFsArraySchema = z.array(programmesPDFsSchema);

const programmesPDFs = [
  {
    id: 1,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 172.png",
  },
  {
    id: 2,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 173.png",
  },
  {
    id: 3,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 172.png",
  },
  {
    id: 4,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 173.png",
  },
  {
    id: 5,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 172.png",
  },
  {
    id: 6,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 173.png",
  },
  {
    id: 7,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 172.png",
  },
  {
    id: 8,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 173.png",
  },
  {
    id: 9,
    pdfUrl: "/img/programi/izvidnici.pdf",
    pdfImageSrc: "/img/programi/image 172.png",
  },
];

function parseProgrammesPDFs() {
  const programmesPDFsParsed =
    programmesPDFsArraySchema.safeParse(programmesPDFs);

  if (!programmesPDFsParsed.success) {
    throw new Error(programmesPDFsParsed.error.message);
  }

  return programmesPDFsParsed.data;
}

const programmesPDFsParsed = parseProgrammesPDFs();

export default programmesPDFsParsed;

const programmeSchema = z.object({
  id: z.number(),
  scoutCategory: z.union([
    z.literal("развигорци"),
    z.literal("извидници"),
    z.literal("изтражувачи"),
    z.literal("ровери"),
    z.literal("сениори"),
  ]),
  minimumAge: z.number(),
  maximumAge: z.number().optional(),
  description: z.string(),
});

const programmesArraySchema = z.array(programmeSchema);

const programmes = [{}];

// Parse the data

// Export the parsed data
