import axios from "axios";

export const getArticle = (id) => {
  return axios
    .get(`https://flannery-nc-news.herokuapp.com/api/articles/${id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};
