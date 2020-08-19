using HackerNews_Web_Application.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackerNews_Web_Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticlesController : ControllerBase
    {
        private readonly IArticleService _articleService;

        public ArticlesController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        [HttpGet("{sortType}", Name = "GetArticles")]
        public async Task<IActionResult> GetAsync(string sortType)
        {
            List<ArticleItem> articleList = await _articleService.GetArticlesAsync(sortType);

            if (articleList.Count() == 0)
            {
                return NotFound();
            }

            return Ok(articleList);
        }

    }
}
