import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Starter Kit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className="bg-slate-800 flex justify-center items-center h-screen w-screen py-40">
      <Navigation/>
      </div>
    </div>
  );
}
