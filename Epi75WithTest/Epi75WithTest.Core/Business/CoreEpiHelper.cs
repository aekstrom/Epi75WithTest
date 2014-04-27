using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EPiServer;
using EPiServer.Core;

namespace Epi75WithTest.Core.Business
{
    public interface ICoreEpiHelper
    {
        IEnumerable<IContent> Children(ContentReference page);
        IContent StartPage { get; }
    }

    public class CoreEpiHelper : ICoreEpiHelper
    {
        private IContentRepository _repository;
        public CoreEpiHelper(IContentRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<IContent> Children(ContentReference page)
        {
            return _repository.GetChildren<IContent>(page);
        }

        public IContent StartPage
        {
            get { return _repository.Get<IContent>(ContentReference.StartPage); }
        }

    }
}
