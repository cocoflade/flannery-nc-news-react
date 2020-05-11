import axios from "axios";

export const getArticles = async (author, topic, article_id, sorted) => {
  const { data } = await axios.get(
    "https://flannery-nc-news.herokuapp.com/api/articles",
    {
      params: {
        author: author,
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
      inc_votes: voteChange,
    }
  );
  return data.votes;
};

export const UpdateCommentVotes = async (comment_id, voteChange) => {
  const { data } = await axios.patch(
    `https://flannery-nc-news.herokuapp.com/api/comments/${comment_id}`,
    {
      inc_votes: voteChange,
    }
  );
  return data.votes;
};

export const getUsers = async () => {
  const { data } = await axios.get(
    "https://flannery-nc-news.herokuapp.com/api/users"
  );
  return data.users;
};

export const delComment = async (comment_id) => {
  const { data } = await axios.delete(
    `https://flannery-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
  return data;
};
