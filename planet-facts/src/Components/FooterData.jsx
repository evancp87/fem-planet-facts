const FooterData = ({ rotation, revolution, temperature, radius }) => {
  return (
    <footer className="is-flex is-justify-content-center pt-2 pb-6 ">
      <ul className="footer-data-responsive footer-list mobile-widths-footer has-text-white ">
        <li className="is-uppercase border-full my-1  footer-data-heading footer-data-responsive-item p-2  ">
          Rotation Time:
          <span className="footer-data-value is-text-white is-uppercase">
            {" "}
            {rotation}
          </span>
        </li>
        <li className="is-uppercase border-full my-1 footer-data-heading  footer-data-responsive-item p-2 ">
          Revolution Time:
          <span className="footer-data-value is-text-white ">
            {" "}
            {revolution}
          </span>
        </li>
        <li className="is-uppercase border-full my-1 footer-data-heading footer-data-responsive-item p-2  ">
          Radius:
          <span className="footer-data-value is-text-white "> {radius}</span>
        </li>
        <li className="is-uppercase border-full my-1 footer-data-heading footer-data-responsive-item p-2  ">
          Average Temp.:
          <span className="footer-data-value is-text-white ">
            {" "}
            {temperature}
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default FooterData;
