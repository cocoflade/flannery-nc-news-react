import axios from "axios";

export const getArticles = () => {};

export const getArticle = (id) => {
  return axios
    .get(`https://flannery-nc-news.herokuapp.com/api/articles/${id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getArticleComment = (id) => {
  return axios
    .get(`https://flannery-nc-news.herokuapp.com/api/articles/${id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const PostComment = () => {
  return;
};

export const UpdateArticleVotes = (id, voteChange) => {
  return axios.patch(
    `https://flannery-nc-news.herokuapp.com/api/articles/${id}`,
    {
      votes: voteChange,
    }
  );
};

export const UpdateCommentVotes = (comment_id, voteChange) => {
  return axios.patch(
    `https://flannery-nc-news.herokuapp.com/api/comments/${comment_id}`,
    {
      votes: voteChange,
    }
  );
};
