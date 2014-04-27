using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;

namespace Epi75WithTest.Models.ViewModel
{
    public class StartPageViewModel : BaseViewModel
    {
        public XhtmlString MainBody { get; set; }
        public IEnumerable<IContent> TopMenu { get; set; }
    }

}