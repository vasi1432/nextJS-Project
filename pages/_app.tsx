import Layout from "../components/layout";
import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
