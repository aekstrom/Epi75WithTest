using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.Personalization;
using EPiServer.ServiceLocation;
using Epi75WithTest.Core.Business;



namespace Epi75WithTest.Models.ViewModel
{
    public class BaseViewModel
    {
        static IServiceLocator _serviceLocator;
        static IContentRepository _serviceLocation;

        public static IServiceLocator Locator
        {
            get { return (_serviceLocator ?? (_serviceLocator = ServiceLocator.Current)); }
            set { _serviceLocator = value; }
        }

        public static IContentRepository ContentRepository
        {
            get { return (_serviceLocation ?? (_serviceLocation = Locator.GetInstance<IContentRepository>())); }
            set { _serviceLocation = value; }
        }


        public string PageName
        {
            get { return Locator.GetInstance<IEpiPages>().CurrentPage.Name; }
        }

        public string PageTypeName
        {
            get { return CurrentPage.Property["PageTypeName"].Value as string; }
        }


        public IContent StartPage
        {
            get { return Locator.GetInstance<IEpiPages>().StartPage; }
        }


        public IContent CurrentPage
        {
            get { return Locator.GetInstance<IEpiPages>().CurrentPage; }
        }


        public string StartPageUrl
        {
            get { return Locator.GetInstance<IEpiPages>().LinkUrl(StartPage); }
        }

    }
}
