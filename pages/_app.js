import "../styles/app.css";
import { SessionProvider } from "next-auth/react";
import { ImmobileProvider } from "@/contexts/ImmobileContext";

export default function App({ Component, pageProps }) {
  return (
    <ImmobileProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ImmobileProvider>
  );
}
