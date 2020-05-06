import axios from "axios";

export const getArticles = async (topic, article_id, sorted) => {
  const { data } = await axios.get(
    "https://flannery-nc-news.herokuapp.com/api/articles",
    {
      params: {
        topic: topic,
        article_id: article_id,
        sorted: sorted,
      },
    }
  );
  return data.articles;
};

export const getArticle = async (id) => {
  const { data } = await axios.get(
    `https://flannery-nc-news.herokuapp.com/api/articles/${id}`
  );
  return data.article;
};

export const getArticleComment = async (id) => {
  const { data } = await axios.get(
    `https://flannery-nc-news.herokuapp.com/api/articles/${id}/comments`
  );
  return data.comments;
};

export const getTopics = async () => {
  const { data } = await axios.get(
    "https://flannery-nc-news.herokuapp.com/api/topics"
  );
  return data.topics;
};

export const PostComment = async (article_id, addStateComment, user, body) => {
  const { data } = await axios.post(
    `https://flannery-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    {
      body,
      article_id,
      username: user,
    }
  );
  return data.comment;
};

export const UpdateArticleVotes = async (id, voteChange) => {
  const { data } = await axios.patch(
    `https://flannery-nc-news.herokuapp.com/api/articles/${id}`,
    {
      votes: voteChange,
    }
  );
  return data.votes;
};

export const UpdateCommentVotes = async (comment_id, voteChange) => {
  const { data } = await axios.patch(
    `https://flannery-nc-news.herokuapp.com/api/comments/${comment_id}`,
    {
      votes: voteChange,
    }
  );
  return data.votes;
};
