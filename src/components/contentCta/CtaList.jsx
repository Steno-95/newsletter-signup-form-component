function CtaList({ children }) {
  return (
    <li className="flex items-center gap-3">
      <img
        src="/images/icon-list.svg"
        className="self-start"
        alt="success icon for a list"
      />
      <p>{children}</p>
    </li>
  );
}

export default CtaList;
