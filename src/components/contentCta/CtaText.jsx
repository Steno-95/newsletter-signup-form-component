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
            <li className="flex items-center gap-3">
              <img
                src="/images/icon-list.svg"
                className="self-start"
                alt="success icon for a list"
              />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="/images/icon-list.svg"
                className="self-start"
                alt="success icon for a list"
              />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="/images/icon-list.svg"
                className="self-start"
                alt="success icon for a list"
              />
              <p className="">And much more!</p>
            </li>
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
