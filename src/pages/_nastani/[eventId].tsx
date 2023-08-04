import { env } from "@/env.mjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { EventType } from "../razvigorci";
import Image from "next/image";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import { format } from "date-fns";
import Button from "@/components/ui/Button";
import Link from "next/link";

type NastanPageProps = {
  event: EventType;
};

export default function NastanPage() {
  return <div>Event</div>;
}

// const NastanPage: NextPage<NastanPageProps> = ({ event }) => {
//   return (
//     <main className="bg-primary">
//       <section className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10 py-40 text-base-100">
//         <div className="flex w-full items-center justify-center">
//           <Image
//             src={`${env.NEXT_PUBLIC_API_BASE_URL}/${event.picture}`}
//             width={800}
//             height={600}
//             alt={event.title}
//             priority
//             className="rounded-xl border-2 border-secondary"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center gap-6">
//           <h1 className="text-3xl font-bold">{event.title}</h1>

//           <div className="flex w-full items-center justify-center gap-6">
//             <div className="flex items-center gap-1">
//               <IconCalendar className="text-secondary" />
//               {format(new Date(event.start_date), "dd/MM/y")}
//               {" - "}
//               {format(new Date(event.end_date), "dd/MM/y")}
//             </div>

//             <div className="flex items-center gap-1">
//               <IconMapPin className="text-secondary" />
//               {event.place}
//             </div>
//           </div>
//         </div>

//         <p>{event.desc}</p>

//         <p className="leading-loose">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//           cumque perspiciatis accusamus id soluta quo alias numquam ipsum in!
//           Sunt molestias asperiores laborum commodi et natus non, placeat harum
//           laboriosam, sapiente dolore repudiandae omnis voluptatem quisquam ut
//           explicabo eligendi quis! Rem, sed consequuntur! Veniam magnam quas
//           omnis qui consequuntur iusto necessitatibus laboriosam saepe, tempora
//           molestias in dicta perspiciatis numquam minus. Explicabo vel
//           reiciendis quo, quibusdam et in aperiam sit enim. Error dolores
//           quibusdam aut delectus sequi odit! Animi, expedita! Eius dolore quasi
//           ipsum cum! Sunt quibusdam non, molestiae cum debitis magni reiciendis
//           soluta beatae. Deserunt ut quidem molestiae tempora a natus veniam
//           harum accusantium, quas repellat esse aliquid voluptas repudiandae ab
//           laboriosam ex voluptatum dolore error sint aperiam. Eum, ducimus
//           molestias laboriosam aperiam dolorem reprehenderit, quaerat corporis
//           reiciendis qui molestiae odit maiores illum voluptas saepe
//           consequuntur libero adipisci eius at. Necessitatibus ex explicabo
//           cupiditate ducimus accusantium sed a aperiam excepturi!
//         </p>

//         <Button asChild variant="secondary" size="lg">
//           <Link href="/zacleni-se">Доаѓам</Link>
//         </Button>
//       </section>
//     </main>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(`${env.API_BASE_URL}/api/events`);

//   const allEvents: { events: EventType[] } = await response.json();

//   const staticPaths = allEvents.events.map((event) => ({
//     params: { eventId: String(event.id) },
//   }));

//   return {
//     paths: staticPaths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   if (params) {
//     const response = await fetch(
//       `${env.API_BASE_URL}/api/events/${params.eventId}`
//     );

//     const event: { event: EventType } = await response.json();

//     if (!event) {
//       return {
//         props: {},
//       };
//     }

//     return {
//       props: {
//         event: event.event,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

// export default NastanPage;
