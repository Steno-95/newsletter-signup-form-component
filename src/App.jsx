import { useState } from "react";
import CtaPicture from "./components/contentCta/CtaPicture";
import CtaText from "./components/contentCta/CtaText";
import CtaForm from "./components/form/CtaForm";
import Footer from "./ui/Footer";
import Button from "./ui/Button";

function App() {
  const [email, setEmail] = useState("");

  function handleReset() {
    setEmail("");
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <section className="bg-(--white) md:m-auto lg:grid lg:grid-cols-[1fr_.p-8r] lg:p-5 sm:rounded-xl lg:rounded-4xl max-w-fit overflow-hidden lg:gap-8">
        {!email && (
          <>
            <CtaPicture />
            <section className="p-5 max-w-[22rem] text-(--blue-light) lg:col-start-1 lg:row-start-1 lg:min-w-[25rem] place-self-center lg:space-y-5">
              <CtaText click={email} />
              <CtaForm setEmail={setEmail} />
            </section>
          </>
        )}
        {email && (
          <section className="p-5 max-w-[23rem] text-(--blue-light) min-h-screen flex flex-col justify-around lg:min-h-fit lg:max-w-[28rem] lg:p-8 lg:space-y-8">
            <header className="space-y-5">
              <img
                src="/images/icon-success.svg"
                alt="icon for operation succesfull"
                className="size-12 lg:size-15"
              />
              <CtaText email={email} />
            </header>

            <Button onClick={handleReset}>Dismiss message</Button>
          </section>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default App;
