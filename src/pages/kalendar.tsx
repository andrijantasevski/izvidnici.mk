import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import useGetEvents, { EventType } from "@/utils/useGetEvents";
import { format } from "date-fns";
import Link from "next/link";

const months = [
  { monthValue: 0, monthName: "Јануари" },
  { monthValue: 1, monthName: "Февруари" },
  { monthValue: 2, monthName: "Март" },
  { monthValue: 3, monthName: "Април" },
  { monthValue: 4, monthName: "Мај" },
  { monthValue: 5, monthName: "Јуни" },
  { monthValue: 6, monthName: "Јули" },
  { monthValue: 7, monthName: "Август" },
  { monthValue: 8, monthName: "Септември" },
  { monthValue: 9, monthName: "Октомври" },
  { monthValue: 10, monthName: "Ноември" },
  { monthValue: 11, monthName: "Декември" },
];

// const events = [
//   {
//     from: "15/7",
//     to: "20/7",
//     monthValue: 6,
//     title: "Consectetur adipisicing",
//     description:
//       "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "3/8",
//     to: "5/8",
//     monthValue: 7,
//     title: "Ut enim ad minim",
//     description:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "12/9",
//     to: "15/9",
//     monthValue: 8,
//     title: "Duis aute irure",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "2/10",
//     to: "4/10",
//     monthValue: 9,
//     title: "Excepteur sint occaecat",
//     description:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "17/11",
//     to: "20/11",
//     monthValue: 10,
//     title: "Sed ut perspiciatis",
//     description:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "8/12",
//     to: "10/12",
//     monthValue: 11,
//     title: "Nemo enim ipsam",
//     description:
//       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "1/1",
//     to: "5/1",
//     monthValue: 0,
//     title: "Quis nostrud exercitation",
//     description:
//       "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "12/2",
//     to: "15/2",
//     monthValue: 1,
//     title: "Reprehenderit in voluptate",
//     description:
//       "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "21/3",
//     to: "24/3",
//     monthValue: 2,
//     title: "Sint occaecat cupidatat",
//     description:
//       "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     image: "/img/kalendar/event-example.png",
//   },
//   {
//     from: "6/4",
//     to: "8/4",
//     monthValue: 3,
//     title: "Eiusmod tempor incididunt",
//     description: "Eiusmod tempor incididunt ut labore et dolore magna",
//     image: "/img/kalendar/event-example.png",
//   },
// ];

// type EventType = (typeof events)[0];

type EventProps = {
  event: EventType;
};

function Event({ event }: EventProps) {
  return (
    <Link href={`/nastani/${event.id}`} className="flex w-full">
      <div className="flex w-4/12 flex-col items-center justify-center gap-1 rounded-bl-lg rounded-tl-lg border border-transparent bg-secondary p-2 lg:w-3/12">
        <p>од: {format(new Date(event.start_date), "dd/MM/yy")}</p>
        <p>до: {format(new Date(event.end_date), "dd/MM/yy")}</p>
      </div>

      <div className="flex w-8/12 items-center justify-between gap-4 rounded-br-2xl rounded-tr-2xl border border-transparent bg-base-100 pl-4 text-base-content lg:w-9/12">
        <div>
          <p className="font-bold">{event.title}</p>

          <p>{event.desc}</p>
        </div>

        <Image
          className="hidden h-full lg:block"
          src="/img/kalendar/event-example.png"
          width={120}
          height={120}
          alt={""}
        />
      </div>
    </Link>
  );
}

export default function Kalendar() {
  const { data } = useGetEvents();

  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState(0);

  const currentMonth = months[selectedMonth];

  function selectMonth(monthValue: number) {
    setSelectedMonth(monthValue);

    router.push({
      query: {
        month: monthValue,
      },
    });
  }

  const eventsPerMonth =
    data &&
    data.events.filter(
      (event) => new Date(event.start_date).getMonth() === selectedMonth
    );

  function incrementMonth() {
    setSelectedMonth(selectedMonth + 1);

    router.push(
      {
        query: {
          month: selectedMonth + 1,
        },
      },
      undefined,
      { scroll: false }
    );
  }

  function decrementMonth() {
    setSelectedMonth(selectedMonth - 1);

    router.push(
      {
        query: {
          month: selectedMonth - 1,
        },
      },
      undefined,
      { scroll: false }
    );
  }

  useEffect(() => {
    setSelectedMonth(router.query.month ? Number(router.query.month) : 0);
  }, [router]);

  return (
    <main className="bg-primary text-base-100">
      <section className="relative">
        <Image
          src="/img/kalendar/hero-kalendar.jpg"
          width={1920}
          height={536}
          alt="Два извидника покажуваат знак со нивните раце."
          className="h-[50vh] w-full object-cover brightness-90 lg:h-[60vh]"
          priority
        />

        <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-base-100 2xl:text-6xl">
          Календар
        </h1>
      </section>

      <section className="bg-base-100 py-20">
        <div className="mx-auto w-11/12 max-w-screen-xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
            {months.map((month) => (
              <Button
                onClick={() => selectMonth(month.monthValue)}
                size="lg"
                rounding="pill"
                key={month.monthValue}
                className="p-5"
                variant={
                  selectedMonth === month.monthValue ? "secondary" : "primary"
                }
              >
                {month.monthName}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-100">
        <Image
          src="/img/kalendar/pattern.svg"
          width={1920}
          height={111}
          alt="Pattern"
          className="w-full"
          priority
        />
      </section>

      <section className="bg-primary py-20">
        <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10">
          <h2 className="text-center text-3xl font-bold uppercase text-base-100">
            {currentMonth.monthName}
          </h2>

          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
            <Button
              onClick={decrementMonth}
              disabled={selectedMonth === 0}
              variant={selectedMonth === 0 ? "disabled" : "secondary"}
              className="w-full items-center gap-2 lg:w-56"
            >
              <IconChevronLeft className="h-5 w-5" />
              Претходен месец
            </Button>

            <Button
              onClick={incrementMonth}
              disabled={selectedMonth === 11}
              variant={selectedMonth === 11 ? "disabled" : "secondary"}
              className="w-full items-center gap-2 lg:w-56"
            >
              Следен месец
              <IconChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {eventsPerMonth && eventsPerMonth.length > 0 && (
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
              {eventsPerMonth.map((event) => (
                <Event event={event} key={event.id} />
              ))}
            </div>
          )}

          {eventsPerMonth && eventsPerMonth.length === 0 && (
            <div className="text-center text-lg">
              Нема настани за месец {currentMonth.monthName}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
