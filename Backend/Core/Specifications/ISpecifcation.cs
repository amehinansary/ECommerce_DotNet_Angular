using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
  public interface ISpecification<T>
  {
    // This is where you can add in the expressions based on your entity.
    Expression<Func<T, bool>> Criteria { get; }
    // If you want to include foreign keyed table data, you could add it using this method.
    List<Expression<Func<T, object>>> Includes { get; }
    Expression<Func<T, object>> OrderBy { get; }
    Expression<Func<T, object>> OrderByDescending { get; }
    int Take { get; } // Take, Skip and IsPagingEnabled for pagination.
    int Skip { get; }
    bool IsPagingEnabled { get; }
  }
}