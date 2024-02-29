
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <>

          <main className="max-w-[1000px] mx-auto">
              <section className="hero flex justify-center h-screen items-center">
                  <div className="max-w-2xl text-center">

                      <h1 className="text-5xl font-extrabold tracking-tighter">
                          Welcome to Search-Images 👋
                      </h1>
                      <p className="text-2xl font-medium mt-6">
                          Your images librairy powered by Pexels API.
                          Here you can find and download the best images for your projects.
                      </p>
                      <div className="flex gap-2 justify-center mt-8">
                          <Link href="/search">
                              <Button size={"lg"} className="shadow-md">Get started 🚀</Button>
                          </Link>
                          <Link target="_blank" href="https://github.com/franckniat/pexelsclone">
                              <Button size={"lg"} className="shadow-md" variant={"outline"}>Github</Button>
                          </Link>
                      </div>
                  </div>
                  <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-2 text-neutral-500 text-lg font-medium">
                          <p >
                              Coded with ❤️ by
                          </p>
                          <a href="https://github.com/franckniat" className=" hover:underline"> @franckniat</a>
                      </div>
                  </div>
              </section>
          </main>
      </>

  );
}
