namespace dragontrack

open System
open System.Collections.Generic
open System.Linq
open System.Threading.Tasks
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.AspNetCore.HttpsPolicy;
open Microsoft.AspNetCore.Mvc
open Microsoft.Extensions.Configuration
open Microsoft.Extensions.DependencyInjection
open Microsoft.AspNetCore.SpaServices.AngularCli

type Startup private () =
    [<Literal>]
    let sourcefolderspath = "clientside"

    [<Literal>]
    let staticfilespath = sourcefolderspath + "/dist"

    new (configuration: IConfiguration) as this =
        Startup() then
        this.Configuration <- configuration

    // This method gets called by the runtime. Use this method to add services to the container.
    member this.ConfigureServices(services: IServiceCollection) =
        // Add framework services.
        services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2) |> ignore

        services.AddSpaStaticFiles(fun configuration -> 
            configuration.RootPath <- staticfilespath
            ()
        )

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    member this.Configure(app: IApplicationBuilder, env: IHostingEnvironment) =
        if (env.IsDevelopment()) then
            app.UseDeveloperExceptionPage() |> ignore
        else
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts() |> ignore

        app.UseSpaStaticFiles()

        app.UseHttpsRedirection() |> ignore
        app.UseMvc(fun routes ->
            routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}")
            ()
        ) |> ignore
        
        app.UseSpa(fun spa -> 
            // To learn more about options for serving an Angular SPA from ASP.NET Core,
            // see https://go.microsoft.com/fwlink/?linkid=864501

            spa.Options.SourcePath <- sourcefolderspath

            if env.IsDevelopment() then
                spa.UseProxyToSpaDevelopmentServer("http://localhost:4200")
        )       

    member val Configuration : IConfiguration = null with get, set
