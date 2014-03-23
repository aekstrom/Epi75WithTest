using System;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web.Routing;

namespace Epi75WithTest.Core.Business
{

        public interface IEpiPages
        {
            IContent CurrentPage { get; }
            IContent StartPage { get; }
            IContent PageData(ContentReference page); 
            string LinkUrl(IContent page);
            IContent ParentPage { get; }
        }  

        public class EpiPages : IEpiPages
        {
            private readonly PageRouteHelper _pageRouteHelper;
            private readonly IContentRepository _contentRepository;


            public EpiPages(PageRouteHelper pageRouteHelper,
                IContentRepository contentRepository)
            {
                _pageRouteHelper = pageRouteHelper;
                _contentRepository = contentRepository;
            }

            public IContent CurrentPage
            {
                get
                {
                    return _pageRouteHelper.ContentLink == null
                        ? StartPage
                        : _contentRepository.Get<IContent>(_pageRouteHelper.ContentLink);
                }
            }

            public IContent StartPage
            {
                get { return _contentRepository.Get<IContent>(ContentReference.StartPage); }
            }

            public string LinkUrl(IContent content)
            {
                try
                {
                    return ((PageData)content).LinkURL;
                }
                catch (NullReferenceException)
                {
                    //Logger.Log.Error("Error in EpiUrlResolver.GetLinkURL", e);
                    return string.Empty;
                }
                catch (Exception)
                {
                    //Logger.Log.Error(string.Format("Error in EpiUrlResolver.GetLinkURL for page {0}:{1}", content.ContentLink.ID, content.Name), e);
                    return string.Empty;
                }
            }


            public IContent ParentPage
            {
                get
                {
                    return _contentRepository.Get<IContent>(CurrentPage.ParentLink); 
                }
            }

            public IContent PageData(ContentReference page)
            {
                return _contentRepository.Get<IContent>(page);
            }
        }
}
