import CtaList from "./CtaList";

const contentCta = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function CtaText({ email }) {
  return (
    <>
      <h1 className="font-bold text-(--blue) tracking-wide mb-2 text-[2.4rem] lg:text-[3rem] lg:leading-14">
        {email ? "Thanks for subscribing" : "Stay updated!"}
      </h1>
      {!email ? (
        <>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mt-5 mb-7 space-y-3 lg:space-y-4 ">
            {contentCta.map((item, i) => (
              <CtaList key={i}>{item}</CtaList>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-(--blue-light)">
          A confirmation email has been sent to{" "}
          <span className="font-bold ">{email}</span>. Please open it and click
          the button inside to confirm our subscription
        </p>
      )}
    </>
  );
}

export default CtaText;
