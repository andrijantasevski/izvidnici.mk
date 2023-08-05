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
    pdfURL: "...",
    pdfImageSrc: "...",
  },
];

// Parse the data

// Export the parsed data

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
