import ArticleModels from "../models/article.models.js";
import { toSlug } from "../utils/utils.js";

export default () => ({
  getAllArticle: async () => {
    try {
      return await ArticleModels.find();
    } catch (err) {
      throw err;
    }
  },
  getArticleDetails: async (articleId) => {
    try {
      return await ArticleModels.findOne({ _id: articleId });
    } catch (err) {
      throw err;
    }
  },
  createArticle: async (params) => {
    try {
      const article = {
        ...params,
        slug: params.slug || toSlug(params.name),
        meta_title: params.meta_title || params.name,
        meta_description: params.meta_description || params.content,
      };
      return await new ArticleModels(article).save();
    } catch (err) {
      throw err;
    }
  },
});
