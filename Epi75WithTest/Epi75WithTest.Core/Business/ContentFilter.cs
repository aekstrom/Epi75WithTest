using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EPiServer.Core;

namespace Epi75WithTest.Core.Business
{
    public interface IContentFilter
    {
        IEnumerable<T> FilterVisible<T>(IEnumerable<T> items) where T : IContent;
    }

    public class ContentFilter : IContentFilter
    {

        public IEnumerable<T> FilterVisible<T>(IEnumerable<T> items) where T : IContent
        {
            var visible = items
                .Where(w =>
                    w.Property["PageVisibleInMenu"] != null &&
                    w.Property["PageVisibleInMenu"].Value != null)
                .ToArray();
            return visible;
        }
    }
}
