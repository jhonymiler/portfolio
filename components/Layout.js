import Head from "next/head";
import Footer from "./Footer";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <Sidebar />
        <main className="grow px-5">
          {children}
          <Footer />
        </main>
        <Menu />
      </div>
    </>
  );
}
