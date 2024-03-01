import "./style/pageHeader.scss";

export default function PageHeader({ backText, mainText, pointText }) {
  return (
    <header>
      <div className="head_bg_title">{backText}</div>
      <div className="head_main_text">
        {mainText}
        <span className="head_point_text">{pointText}</span>
      </div>
    </header>
  );
}
