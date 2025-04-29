function CtaPicture() {
  return (
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
  );
}

export default CtaPicture;
