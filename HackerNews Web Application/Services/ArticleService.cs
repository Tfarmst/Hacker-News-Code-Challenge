using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace HackerNews_Web_Application.Services
{
    public class ArticleService : IArticleService
    {
        private const string baseUrl = "https://hacker-news.firebaseio.com/v0/";
        private static HttpClient client = new HttpClient();
        private IMemoryCache cache;

        private readonly ILogger<ArticleService> _logger;

        public ArticleService(ILogger<ArticleService> logger, IMemoryCache memoryCache)
        {
            cache = memoryCache;
            _logger = logger;
        }

        public async Task<List<ArticleItem>> GetArticlesAsync(string sortType)
        {
            List<ArticleItem> articleList = new List<ArticleItem>();

            var articleListUrl = "";

            //Here we are just checking for the specific sorting method we want to use to return articles and adjusting the url accordingly.
            if (sortType == "top")
            {
                articleListUrl = baseUrl + "topstories.json?print=pretty";
            }
            else if (sortType == "best")
            {
                articleListUrl = baseUrl + "beststories.json?print=pretty";
            }
            else
            {
                articleListUrl = baseUrl + "newstories.json?print=pretty";
            }

            var response = await client.GetAsync(articleListUrl);


            if (response.StatusCode == HttpStatusCode.OK)
            {
                var articleResponse = response.Content.ReadAsStringAsync().Result;

                var articleIds = JsonConvert.DeserializeObject<List<int>>(articleResponse);

                //Our initial call just returns an array of article ids, so we need to call a seperate function to get the information for each article.
                var articleFetch = articleIds.Select(GetArticleFromId);

                articleList = (await Task.WhenAll(articleFetch)).ToList();
            }
            else
            {
                return null;
            }

            return articleList;

        }

        //Function to get an article's information based on it's unique id
        private async Task<ArticleItem> GetArticleFromId(int articleId)
        {
            return await cache.GetOrCreateAsync(articleId,
                async cacheEntry =>
                {
                    ArticleItem article = new ArticleItem();

                    var response = await client.GetAsync(string.Format(baseUrl + "item/{0}.json?print=pretty", articleId));
                    if (response.StatusCode == HttpStatusCode.OK)
                    {
                        var articleResponse = response.Content.ReadAsStringAsync().Result;
                        article = JsonConvert.DeserializeObject<ArticleItem>(articleResponse);
                    }

                    return article;
                });
        }

    }
}
