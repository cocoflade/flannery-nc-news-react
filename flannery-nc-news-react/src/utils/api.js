import axios from "axios";

export const getArticles = (topic, article_id, sorted) => {
  return axios.get("https://flannery-nc-news.herokuapp.com/api/articles", {
    params: {
      topic: topic,
      article_id: article_id,
      sorted: sorted,
    },
  });
};

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

export const PostComment = (article_id, addStateComment, user, body) => {
  return axios.post(
    `https://flannery-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    {
      body,
      article_id,
      username: user,
    }
  );
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
