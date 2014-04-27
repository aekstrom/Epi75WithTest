using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;
using Epi75WithTest.Core.Business;
using Epi75WithTest.Core.Model;
using Epi75WithTest.Models.Page;
using Epi75WithTest.Models.ViewModel;

namespace Epi75WithTest.Controllers
{
    public class StartPageController : PageController<StartPage>
    {
        private IMenuHandler _iMenuHandler;

  

        public ActionResult Index(StartPage currentPage)
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */
            var model = new StartPageViewModel
                            {
                                MainBody = currentPage.MainBody,
                                TopMenu = new MenuHandler(new ContentFilter()).MainMenu()
                            };

            return View(model);
        }
    }
}