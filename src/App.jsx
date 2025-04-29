import Footer from "./ui/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <section className="bg-(--white) md:m-auto lg:grid lg:grid-cols-[1fr_.p-8r] lg:p-8 rounded-xl max-w-fit overflow-hidden">
        <picture className="lg:col-start-2">
          <source
            srcSet="/images/illustration-sign-up-desktop.svg"
            media="(min-width: 1024px)"
          />
          <img
            src="/images/illustration-sign-up-mobile.svg"
            className="object-fit"
          />
        </picture>
        <section className="p-5 max-w-[23rem] text-(--blue-light) lg:col-start-1 lg:row-start-1 lg:max-w-[30rem] place-self-center">
          <h1 className="font-bold text-(--blue) tracking-wide mb-2 text-[2.4rem] ">
            Stay updated!
          </h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="mt-5 mb-7 space-y-3 ">
            <li className="flex items-center gap-3">
              <img src="/images/icon-list.svg" className="self-start" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex items-center gap-3">
              <img src="/images/icon-list.svg" className="self-start" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex items-center gap-3">
              <img src="/images/icon-list.svg" className="self-start" />
              <p className="">And much more!</p>
            </li>
          </ul>

          <form className="flex flex-col gap-2 ">
            <label className="font-bold text-[.7rem]" htmlFor={"email"}>
              Email address
            </label>
            <input
              placeholder="email@company.com"
              className="border-1 border-(--grey) text-[.9rem] w-full px-5 py-2 rounded-md focus:outline-1 focus:outline-(--blue)"
              id="email"
              autoComplete="off"
            />

            <button
              className="text-(--white) bg-(--blue) text-[.9rem] text-center w-full py-2 rounded-md hover:bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-[0_10px_10px] hover:shadow-red-300/45 cursor-pointer mt-3"
              type="button"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;

/*

  <!-- Sign-up form start -->

  Stay updated!

  Join 60,000+ product managers receiving monthly updates on:

  Product discovery and building what matters
  Measuring to ensure updates are a success
  And much more!

  Email address
  email@company.com

  Subscribe to monthly newsletter

  <!-- Sign-up form end -->

  <!-- Success message start -->

  Thanks for subscribing!

  A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.

  Dismiss message

  <!-- Success message end -->
  
*/
