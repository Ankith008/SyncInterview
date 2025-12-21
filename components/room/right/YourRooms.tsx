import React from "react";
import { sampleRooms } from "@/lib/sampledata";
import RoomCard from "./RoomCard";

export default function YourRooms() {
  return (
    <section className="bg-white/5 rounded-3xl divide-y divide-white/20 space-y-3">
      {sampleRooms.length > 0 ? (
        sampleRooms.map((room) => (
          <RoomCard
            key={room.id}
            title={room.title}
            template={room.template}
            status={room.status}
            candidate={room.candidate}
            scheduledAt={room.scheduledAt}
            slug={room.slug}
            onJoin={(slug) => console.log("Join:", slug)}
            onCopy={(slug) => navigator.clipboard.writeText(`/room/${slug}`)}
          />
        ))
      ) : (
        <div>No Classes Found</div>
      )}
    </section>
  );
}
