using System;
using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
  public class OrderConfiguration : IEntityTypeConfiguration<Order>
  {
    public void Configure(EntityTypeBuilder<Order> builder)
    {
      builder.OwnsOne(o => o.ShipToAddress, a =>
      {
        a.WithOwner();// here u could add the required props and other stuff but it can be in DTO
      });
      builder.Property(s => s.Status)
          .HasConversion(
              o => o.ToString(),
              o => (OrderStatus)Enum.Parse(typeof(OrderStatus), o)
          );
      builder.HasMany(o => o.OrderItems).WithOne().OnDelete(DeleteBehavior.Cascade);
    }
  }
}