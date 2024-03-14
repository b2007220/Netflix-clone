import Image from "next/image";
import prisma from "../utils/db";
import { MovieCard } from "./MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

async function getData(userId: string) {
  const data = await prisma?.movie.findMany({
    select: {
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      duration: true,
      id: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      age: true,
      release: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return data;
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions);
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data?.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"></Image>
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"></Image>
              <MovieCard
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                youtubeUrl={movie.youtubeString}
                watchList={movie.WatchLists.length > 0 ? true : false}
                age={movie.age}
                year={movie.release}
                time={movie.duration}
                key={movie.id}></MovieCard>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
