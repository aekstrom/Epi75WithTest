using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPiServer.Core;
using Epi75WithTest.Core.Business;
using Epi75WithTest.Core.Model;
using NUnit.Framework;
using Rhino.Mocks;

namespace Epi75WithTest.Tests
{
    [TestFixture]
    public class when_MenuHandler
    {
        private MenuHandler menuHandler;
        private ICoreEpiHelper _epiHelper;
        private IContent[] menupagesmock;
        private IContent startpage;

        [TestFixtureSetUp]
        public void SetupBeforeTesting()
        {
           
            var pagemock1 = MockRepository.GenerateMock<IContent>();
         
        }

        [SetUp]
        public void RunBeforeEachTest()
        {
            //var mock = MockRepository.GenerateMock<ICoreEpiHelper>();
           
        }

        [Test]
        public void when_get_visible_children()
        {
            //var pages = menuHandler.MainMenu();
            //Assert.That(pages.Count(), Is.EqualTo(2));
        }
    }
}
