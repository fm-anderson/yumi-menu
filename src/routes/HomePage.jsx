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
      className="flex h-screen flex-col items-center justify-between text-center"
    >
      <Navbar />

      <main>
        <h1 className="text-3xl font-bold underline">React Starter</h1>
      </main>

      <NavMenu />
    </div>
  );
}

export default HomePage;
