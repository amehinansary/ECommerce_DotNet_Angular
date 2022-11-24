using System.Reflection;
using System.Text.Json;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
  public class StoreContextSeed
  {
    public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
    {
      try
      { // path didnt work as u needed the current directory not assembly
        var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
        var currentDir = Path.GetDirectoryName(Environment.CurrentDirectory);
        if (!context.ProductBrands.Any())
        {
          var brandsData = File.ReadAllText(currentDir + @"/Infrastructure/Data/SeedData/brands.json");
          var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

          foreach (var item in brands)
          {
            context.ProductBrands.Add(item);
          }

          await context.SaveChangesAsync();
        }

        if (!context.ProductTypes.Any())
        {
          var typesData = File.ReadAllText(currentDir + @"/Infrastructure/Data/SeedData/types.json");
          var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

          foreach (var item in types)
          {
            context.ProductTypes.Add(item);
          }

          await context.SaveChangesAsync();
        }

        if (!context.Products.Any())
        {
          var productsData = File.ReadAllText(currentDir + @"/Infrastructure/Data/SeedData/products.json");
          var products = JsonSerializer.Deserialize<List<Product>>(productsData);

          foreach (var item in products)
          {
            context.Products.Add(item);
          }

          await context.SaveChangesAsync();
        }

        if (!context.DeliveryMethods.Any())
        {
          var dmData = File.ReadAllText(currentDir + @"/Infrastructure/Data/SeedData/delivery.json");
          var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

          foreach (var item in methods)
          {
            context.DeliveryMethods.Add(item);
          }

          await context.SaveChangesAsync();
        }
      }
      catch (Exception ex) // todo: someone says not to use Exception ex pls search
      {
        var logger = loggerFactory.CreateLogger<StoreContextSeed>();
        logger.LogError(ex.Message);
      }
    }
  }
}
