using Microsoft.OpenApi.Models;

namespace API.Extensions
{
  public static class SwaggerServiceExtensions
  {
    public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
    {
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v2", new OpenApiInfo { Title = "ECommerce_APIs", Version = "v2" });

        var securitySchema = new OpenApiSecurityScheme
        {
          Description = "JWT Auth Bearer Scheme",
          Name = "Authorization",
          In = ParameterLocation.Header,
          Type = SecuritySchemeType.Http,
          Scheme = "Bearer",
          Reference = new OpenApiReference
          {
            Type = ReferenceType.SecurityScheme,
            Id = "Bearer"
          }
        };

        c.AddSecurityDefinition("Bearer", securitySchema);
        var securityRequirement = new OpenApiSecurityRequirement { { securitySchema, new[] { "Bearer" } } };
        c.AddSecurityRequirement(securityRequirement);
      });

      return services;
    }

    public static IApplicationBuilder UseSwaggerDocumentation(this IApplicationBuilder app)
    {
      app.UseSwagger();
      app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v2/swagger.json", "ECommerce_API v2"));

      return app;
    }
  }
}