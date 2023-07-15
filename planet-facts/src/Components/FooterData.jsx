const FooterData = ({ rotation, revolution, temperature, radius }) => {
  return (
    <footer className="footer ">
      <ul className="footer-data-responsive footer-list mobile-widths-footer  ">
        <li className=" border-full  footer-data-heading footer-data-responsive-item   ">
          Rotation Time:
          <span className="footer-data-value "> {rotation}</span>
        </li>
        <li className=" border-solid footer-data-heading  footer-data-responsive-item  ">
          Revolution Time:
          <span className="footer-data-value  "> {revolution}</span>
        </li>
        <li className="  footer-data-heading footer-data-responsive-item   ">
          Radius:
          <span className="footer-data-value  "> {radius}</span>
        </li>
        <li className=" footer-data-heading footer-data-responsive-item   ">
          Average Temp.:
          <span className="footer-data-value  "> {temperature}</span>
        </li>
      </ul>
    </footer>
  );
};

export default FooterData;
