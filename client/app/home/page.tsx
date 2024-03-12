import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";

export default function Home() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo></MovieVideo>
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded></RecentlyAdded>
    </div>
  );
}
