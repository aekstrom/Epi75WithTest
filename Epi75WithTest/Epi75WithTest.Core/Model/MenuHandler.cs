using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using Epi75WithTest.Core.Business;

namespace Epi75WithTest.Core.Model
{
   

        public class MenuHandler 
        {
            private IContentFilter _contentFilter;

            public MenuHandler(IContentFilter contentFilter)
            {
                _contentFilter = contentFilter;
            }

            public IEnumerable<IContent> MainMenu()
            {
                 var _repository = ServiceLocator.Current.GetInstance<IContentRepository>();
                 var page = _repository.Get<IContent>(ContentReference.StartPage);
                 var children = _repository.GetChildren<IContent>(page.ContentLink);
                 return _contentFilter.FilterVisible(children);
            }
        }
}

