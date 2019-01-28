module dragontrack.Controllers.session

open System
open Microsoft.AspNetCore.Mvc
open Microsoft.AspNetCore.Routing
open System.Runtime.Caching
open Microsoft.AspNetCore.Mvc.ViewEngines
open dragontrack.models.session

[<Route("api/session")>]
[<ApiController>]
type sessioncontroller() =
    inherit ControllerBase()

    [<HttpGet>]
    member public x.Get(inputid : Guid) : ActionResult =
        if (MemoryCache.Default
                .Contains(inputid.ToString())
            ) then
            base.Ok(inputid) :> ActionResult

        else
            base.NotFound() :> ActionResult

    member private x.getcacheitempriority() : CacheItemPriority =
        CacheItemPriority.Default

    member private x.getcacheitempolicy() : CacheItemPolicy =
        let output = new CacheItemPolicy()
        output.SlidingExpiration <- session.expirationspan
        output.Priority <- x.getcacheitempriority()
        output

    [<HttpPost>]
    member public x.Post() : ActionResult =
        let sessionid = Guid.NewGuid()
        let sessionstringid = sessionid.ToString()
        let newsession = new session()
        newsession.id <- sessionid
        let cacheitem = new CacheItem(sessionstringid, newsession)
        let policy = x.getcacheitempolicy()

        let outcome = 
            MemoryCache.Default
                .Add(cacheitem, policy)

        if outcome then 
            base.Ok(sessionid) :> ActionResult

        else
            let error = 
                String.concat String.Empty [
                "new session cannot be created. session id ";
                sessionstringid;
                "already exists."
            ]
            base.Conflict(error) :> ActionResult
