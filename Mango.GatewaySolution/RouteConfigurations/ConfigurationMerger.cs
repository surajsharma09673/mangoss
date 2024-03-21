using System.IO;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Linq;

public static class ConfigurationMerger
{
    public static IConfiguration MergeConfigurations(IHostEnvironment environment)
    {
        // Paths to your JSON files
        var orderJsonPath = Path.Combine(
            environment.ContentRootPath,
            "RouteConfigurations",
            "Order.json"
        );
        var productJsonPath = Path.Combine(
            environment.ContentRootPath,
            "RouteConfigurations",
            "Product.json"
        );
        var couponJsonPath = Path.Combine(
            environment.ContentRootPath,
            "RouteConfigurations",
            "Coupon.json"
        );
        var ShoppingCartJsonPath = Path.Combine(
            environment.ContentRootPath,
            "RouteConfigurations",
            "ShoppingCart.json"
        );

        // Load and parse the JSON files
        var orderJson = JObject.Parse(File.ReadAllText(orderJsonPath));
        var productJson = JObject.Parse(File.ReadAllText(productJsonPath));
        var couponJson = JObject.Parse(File.ReadAllText(couponJsonPath));
        var ShoppingCartJson = JObject.Parse(File.ReadAllText(ShoppingCartJsonPath));

        // Assuming both JSON files have a "Routes" array, merge them
        var combinedRoutes = new JArray(
            orderJson["Routes"]
                .Concat(productJson["Routes"])
                .Concat(couponJson["Routes"])
                .Concat(ShoppingCartJson["Routes"])
        );

        // Create a new JObject to hold the combined configuration
        var combinedConfig = new JObject
        {
            ["Routes"] = combinedRoutes,
            ["GlobalConfiguration"] = orderJson["GlobalConfiguration"] // Assuming the GlobalConfiguration from Order.json is used
        };

        // Convert the combined JObject to an IConfiguration
        var configuration = new ConfigurationBuilder()
            .AddJsonStream(
                new MemoryStream(System.Text.Encoding.UTF8.GetBytes(combinedConfig.ToString()))
            )
            .Build();

        return configuration;
    }
}
