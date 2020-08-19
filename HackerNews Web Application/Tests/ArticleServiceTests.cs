using HackerNews_Web_Application.Services;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackerNews_Web_Application.Service.Tests
{
    [TestFixture]
    public class ArticleServiceTests
    {

        object expected = null;

        [Test]
        public async Task GetArticlesNew_ShouldReturn500NewArticles()
        {
            var memoryCache = MockMemoryCacheService.GetMemoryCache(expected);
            var query = new ArticleService(null, memoryCache);
            List<ArticleItem>result = await query.GetArticlesAsync("New");
            Assert.AreEqual(500, result.Count());
        }

        [Test]
        public async Task GetArticlesTop_ShouldReturn500TopArticles()
        {
            var memoryCache = MockMemoryCacheService.GetMemoryCache(expected);
            var query = new ArticleService(null, memoryCache);
            List<ArticleItem> result = await query.GetArticlesAsync("Top");
            Assert.AreEqual(500, result.Count());
        }

        [Test]
        public async Task GetArticlesBest_ShouldReturn500BestArticles()
        {
            var memoryCache = MockMemoryCacheService.GetMemoryCache(expected);
            var query = new ArticleService(null, memoryCache);
            List<ArticleItem> result = await query.GetArticlesAsync("Best");
            Assert.AreEqual(500, result.Count());
        }

        [Test]
        public async Task GetArticlesWithIncorrectType_ShouldReturn500NewArticles()
        {
            var memoryCache = MockMemoryCacheService.GetMemoryCache(expected);
            var query = new ArticleService(null, memoryCache);
            List<ArticleItem> result = await query.GetArticlesAsync("New");
            Assert.AreEqual(500, result.Count());
        }

    }
}
