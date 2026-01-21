import "./whyList.css";
import whyListData from "../../../data/whyList.json";

function WhyList() {
  return (
    <>
      {whyListData.map((item) => (
        <article key={item.id} className="why-item">
          <img src={`../src/assets/${item.icon}.svg`} alt="" />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </article>
      ))}
    </>
  );
}

export default WhyList;
