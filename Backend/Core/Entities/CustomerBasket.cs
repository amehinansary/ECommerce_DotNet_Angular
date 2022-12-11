using System.Collections.Generic;

namespace Core.Entities
{
  public class CustomerBasket
  {
    public CustomerBasket()
    {
    }

    public CustomerBasket(string id)
    {
      Id = id;
    }

    public string Id { get; set; }
    public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    public int? DeliveryMethodId { get; set; }// 'cause customers dont have option to select the
    public string ClientSecret { get; set; }// delivery method untill they get to the checkout
    public string PaymentIntentId { get; set; }
    public decimal ShippingPrice { get; set; }
  }
}