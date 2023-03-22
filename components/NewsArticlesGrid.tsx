import { NewsArticle } from "@/models/NewsArticles";
import { Row, Col } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticlesGridProps {
  articles: NewsArticle[];
}

const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
  return (
    <Row xs={1} sm={2} xl={3}>
      {articles.map((article) => (
        <Col key={article.url}>
          <NewsArticleEntry article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticlesGrid;
