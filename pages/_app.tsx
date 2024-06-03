import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header title={"Flight Roaster"} />
      <Component {...pageProps} />
      <Footer />
      <Toaster />
    </Provider>
  );
}
