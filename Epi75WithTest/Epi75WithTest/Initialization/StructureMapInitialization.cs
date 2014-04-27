using System;
using System.Web.Mvc;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using Epi75WithTest.Core.Business;
using Epi75WithTest.Core.Model;
using Epi75WithTest.StructureMap;

namespace Epi75WithTest.Initialization
{

    [ModuleDependency(typeof(ServiceContainerInitialization))]
    [InitializableModule]
    public class StructureMapConfiguration : IConfigurableModule
    {
        public void ConfigureContainer(ServiceConfigurationContext context)
        {
            var container = context.Container;
            DependencyResolver.SetResolver(new StructureMapDependencyResolver(context.Container));

            try
            {
                //container.Configure(c => c.For<IEpiPages>().Use<EpiPages>());
                //container.Configure(c => c.For<ICoreEpiHelper>().Use<CoreEpiHelper>());
                container.Configure(c => c.For<IContentFilter>().Use<ContentFilter>());
            }

            catch (Exception e)
            {
                //new Logger()("Error in StructureMapConfiguration.ConfigureContainer", e);
            }
        }

        public void Initialize(InitializationEngine context)
        {

        }

        public void Preload(string[] parameters) { }
        public void Uninitialize(InitializationEngine context) { }


    }
}
