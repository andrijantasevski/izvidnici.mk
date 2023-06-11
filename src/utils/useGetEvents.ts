import { env } from "@/env.mjs";
import { useQuery } from "@tanstack/react-query";

export type EventType = {
  id: number;
  picture: string;
  title: string;
  place: string;
  desc: string;
  start_date: string;
  end_date: string;
  created_at: Date | null;
  updated_at: Date | null;
};

export default function useGetEvents() {
  async function fetchStudents() {
    const response = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/api/events`);

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("There was an error fetching events!");
    }

    return responseData;
  }

  return useQuery<{ events: EventType[] }>({
    queryFn: fetchStudents,
    queryKey: ["events"],
  });
}
