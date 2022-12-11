using System;
using System.Collections.Generic;

namespace Core.Entities.OrderAggregate
{
  public class Order : BaseEntity
  {
    public Order()
    {
    }

    public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail,
        Address shipToAddress, DeliveryMethod deliveryMethod,
        decimal subtotal, string paymentIntentId)
    {
      BuyerEmail = buyerEmail;
      ShipToAddress = shipToAddress;
      DeliveryMethod = deliveryMethod;
      OrderItems = orderItems;
      Subtotal = subtotal;
      PaymentIntentId = paymentIntentId;
    }

    public string BuyerEmail { get; set; }// we gonna retrieve a list of buyer orders based on this
    public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
    public Address ShipToAddress { get; set; }
    public DeliveryMethod DeliveryMethod { get; set; }
    public IReadOnlyList<OrderItem> OrderItems { get; set; }
    public decimal Subtotal { get; set; }// will be total of orderitems and quantity added together
    public OrderStatus Status { get; set; } = OrderStatus.Pending;
    public string PaymentIntentId { get; set; }// the payment method we gonna use

    public decimal GetTotal()// automapper?
    {
      return Subtotal + DeliveryMethod.Price;
    }
  }
}