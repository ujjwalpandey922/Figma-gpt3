import "./Article_Style.css";
const Article = ({ img, date, tag, info }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-img">
        <img src={img} alt="img" />
      </div>
      <div className="gpt3__blog-container_article-container">
        <div className="gpt3__blog-container_article-container-info">
          <p>{date}</p>
          <h5>{info}</h5>
        </div>
        <span>{tag}</span>
      </div>
    </div>
  );
};

export default Article;
