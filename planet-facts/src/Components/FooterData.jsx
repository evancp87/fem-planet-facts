/* eslint react/prop-types: 0 */

const FooterData = ({ rotation, revolution, temperature, radius }) => {
  return (
    <section className="data ">
      <ul className="data__list mobile-widths-footer  ">
        <li className="  data__heading data__value-item    ">
          Rotation Time:
          <span className="data__value "> {rotation}</span>
        </li>
        <li className="  data__heading  data__value-item   ">
          Revolution Time:
          <span className="data__value  "> {revolution}</span>
        </li>
        <li className="  data__heading data__value-item    ">
          Radius:
          <span className="data__value  "> {radius}</span>
        </li>
        <li className=" data__heading data__value-item    ">
          Average Temp.:
          <span className="data__value  "> {temperature}</span>
        </li>
      </ul>
    </section>
  );
};

export default FooterData;
