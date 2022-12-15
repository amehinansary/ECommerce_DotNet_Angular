using Core.Entities;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
  public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
  {
    public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery,
            ISpecification<TEntity> spec)
    {
      var query = inputQuery;

      if (spec.Criteria != null)
        query = query.Where(spec.Criteria);//p => p.ProductID == id

      if (spec.OrderBy != null)
        query = query.OrderBy(spec.OrderBy);

      if (spec.OrderByDescending != null)
        query = query.OrderByDescending(spec.OrderByDescending);

      if (spec.IsPagingEnabled)
        query = query.Skip(spec.Skip).Take(spec.Take);
      // An aggregate function performs a calculation on a set of values, and returns a single value.
      // .NET Core Aggregate extension method Applies an accumulator function over a sequence.!
      // The specified query value is used as the initial accumulator value.
      // callback Func (current, include), ask SWA Mabrouck?

      // so this is gonna aggregate one of the above queries with the include to a product brand
      // so it's gonna aggregate Product with ProductBrand and aggregate any type of includes
      // .Include(p=>p.productType).Include(p=>p.productBrand)
      query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));

      return query;
    }
  }
}