using System;

namespace HackerNews_Web_Application
{
    public class ArticleItem
    {
        public string ID { get; set; }
        public string Title { get; set; }
        public string URL { get; set; }
        public int Score { get; set; }
        public int Descendants { get; set; }
        public string Time { get; set; }
        public string By { get; set; }
        public Boolean Dead { get; set; }
        public Boolean Deleted { get; set; }

    }
}
