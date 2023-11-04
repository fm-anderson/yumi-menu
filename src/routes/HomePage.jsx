import ItemCard from "../components/ItemCard";
import NavMenu from "../components/NavMenu";
import Navbar from "../components/Navbar";

export async function homeLoader() {
  // this async function will run before the route loads.
  // https://reactrouter.com/en/main/route/loader

  // the returned value can be accessed with useLoaderData hook
  // https://reactrouter.com/en/main/hooks/use-loader-data

  console.log("homeLoader");
  return null;
}

function HomePage() {
  return (
    <div
      data-theme="light"
      className="flex h-screen flex-col items-center text-center"
    >
      <Navbar />

      <main className="grid grid-cols-2 grid-rows-2 gap-2">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </main>

      <NavMenu />
    </div>
  );
}

export default HomePage;
