using System.Collections.Generic;
using System.Threading.Tasks;

namespace HackerNews_Web_Application.Services
{
    public interface IArticleService
    {
        Task<List<ArticleItem>> GetArticlesAsync(string sortType);
    }
}