using Microsoft.Extensions.Hosting;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Call the MergeConfigurations method and use the merged configuration for Ocelot
var mergedConfiguration = ConfigurationMerger.MergeConfigurations(builder.Environment);
builder.Services.AddOcelot(mergedConfiguration);

var app = builder.Build();

// Your app configuration, such as app.MapGet("/", () => "Hello World!");

app.UseOcelot().Wait();

app.Run();
