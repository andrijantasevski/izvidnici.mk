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

export const programmesPDFsParsed = parseProgrammesPDFs();

const programmeSchema = z.object({
  id: z.number(),
  scoutCategory: z.union([
    z.object({
      macedonian: z.literal("развигорци"),
      macedonianLatin: z.literal("razvigorci"),
    }),
    z.object({
      macedonian: z.literal("извидници"),
      macedonianLatin: z.literal("izvidnici"),
    }),
    z.object({
      macedonian: z.literal("истражувачи"),
      macedonianLatin: z.literal("istrazhuvachi"),
    }),
    z.object({
      macedonian: z.literal("ровери"),
      macedonianLatin: z.literal("roveri"),
    }),
    z.object({
      macedonian: z.literal("сениори"),
      macedonianLatin: z.literal("seniori"),
    }),
  ]),
  minimumAge: z.number(),
  maximumAge: z.number().optional(),
  description: z.array(z.string()),
  imageSrc: z.string(),
});

const programmesArraySchema = z.array(programmeSchema);

export type ProgrammeSchema = z.infer<typeof programmeSchema>;

const programmes = [
  {
    id: 1,
    scoutCategory: { macedonian: "развигорци", macedonianLatin: "razvigorci" },
    minimumAge: 7,
    maximumAge: 10,
    description: [
      "Ја запознаваат природата, учат да ја сакаат и се грижат за неа. Учат како да се снајдат во природа и да станат свесни за нејзините вредности и опасности. Ги познаваат своите права и обврски и развиваат чувство за правда и еднаквост. Го запознаваат, почитуваат и соработуваат со светот во кој живеат. Слободно ги истражуваат своите мисли и чувства. Се грижат за своето здравје и дух. Се снаоѓаат во времето и просторот, креативно истражуваат, ги користат основните технички уреди и средства за комуникација. Ја ценат својата и културата на другите, го прифаќаат кодексот на фино однесување и етиката. Се запознаваат со работата и принципите на организацијата, учествувајќи во изградба на својата патрола учејќи да го почитуваат, ценат и сакаат извидништвото, знаејќи ги своите права и должности во организацијата.",
    ],
    imageSrc: "/img/programi/Rectangle 301.png",
  },
  {
    id: 2,
    scoutCategory: { macedonian: "извидници", macedonianLatin: "izvidnici" },
    minimumAge: 11,
    maximumAge: 14,
    description: [
      "Истражуваат, следат, проценуваат, забележуваат и се снаоѓаат во животната средина. Така, учат да живеат во склоп на природата, ненарушувајќи ја. Ги прифаќаат граѓанските вредности и ја почитуваат својата и културата на другите, со што придонесуваат кон развојот на својата средина. Ги познаваат општите правила на однесување и комуникација, се усовршуваат со трендовите, го разбираат културното и своето духовно наследство, како и на другите, а со тоа се развиваат во свесни и одговорни личности, кои ги планираат ресурсите и се грижат за здравјето и хигиената. Горди се како членови на организацијата и ги ценат нејзините вредности и принципи, познавајќи ја структурата на организацијата, своите права и должности, нејзината традиција и развојот во земјата и светот.",
    ],
    imageSrc: "/img/programi/Rectangle 303.png",
  },
  {
    id: 3,
    scoutCategory: {
      macedonian: "истражувачи",
      macedonianLatin: "istrazhuvachi",
    },
    minimumAge: 15,
    maximumAge: 17,
    description: [
      "Кампуваат во природа и рационално ги користат природните богатства. Способни се самостојно да преживеат во природа и да се снајдат во просторот. Ја почитуваат природната средина, одговорни се со истата и тој пристап го пренесуваат на другите. Ги почитуваат и разбираат останатите и развиваат универзални човечки вредности. Се застапуваат за мир и човекови права, со што создаваат свет без предрасуди, стереотипи и сите облици на дискриминација. Придонесуваат кон зачувување на традицијата и културата. Oдговорни и иновативни личности, со изграден идентитет, способни активно да учествуваат во друштвениот живот и да живеат во склоп со духовната и социјалната реалност во заедницата. Ја познаваат организациската структура и учествуваат во зачувување на нејзините вредности, култура и традиција; учествуваат во спроведување на програмата, систематско донесување одлуки и унапредување на работата; како и размена на искуства со други организации внатре во извидничката фамилија, но и надвор од неа, чувајќи и застапувајќи ги вредностите на извидништвото.",
    ],
    imageSrc: "/img/programi/Rectangle 302.png",
  },
  {
    id: 3,
    scoutCategory: { macedonian: "ровери", macedonianLatin: "roveri" },
    minimumAge: 18,
    maximumAge: 29,
    description: [
      "Роверите се организираат во клубови, кои се основните видови на организирање и работни групи, преку кои ги реализираат своите програмски и друштвени активности. Во клубовите, за полесно спроведување на активностите, се формираат секции и групи, кои можат да бидат со постојан и привремен карактер, во зависност од склоностите на членството и видовите на активности со кои тие сакаат да се занимаваат. Клубот делува во рамките на извидничкиот одред, во полна синхронизација и координација со работата на останатите членови, а повремено можат да се здружат и со другите клубови, на сите нивоа во организирање. Клубот има свое име и знак или знаме, во склоп со важечките правилници. Роверскиот клуб може да биде формиран и од повеќе извидници-ровери од различни извиднички одреди, студенти и слично.",
    ],
    imageSrc:
      "/img/programi/307129506_5653441804717661_7339693875923801490_n 1.png",
  },
  {
    id: 4,
    scoutCategory: { macedonian: "сениори", macedonianLatin: "seniori" },
    minimumAge: 29,
    description: [
      "Дали имате пасија за активности во природа? Дали поддржувате здрав и активен начин на живот како основа за подобар животен квалитет? Дали верувате дека имате нешто да понудите во неформалната едукација на младите? Дали сакате да придонесете во развојот на младите во вашата заедница? Дали сакате да создадете подобар свет за младите?",
      "Возрасните можат да бидат од клучна важност во насочување на младите да изберат правилен пат во својот живот. Возрасните може да станат дел од извидничката организација која нуди простор и можности за секој возрасен во согласност со слободното време и желба да придонесе кон извидништвото. Преку извидничката организација, возрасните можат да ја градат својата самодоверба и да ги развиваат организациските и лидерски способности. Вклученоста на возрасните во извидништвото е секогаш добредојдена како на локално така и на национално ниво.",
    ],
    imageSrc: "/img/programi/Rectangle 304.png",
  },
];

function parseProgrammes() {
  const programmesParsed = programmesArraySchema.safeParse(programmes);

  if (!programmesParsed.success) {
    throw new Error(programmesParsed.error.message);
  }

  return programmesParsed.data;
}

export const programmesParsed = parseProgrammes();
