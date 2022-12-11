namespace Core.Entities.OrderAggregate
{// allows us to take a snapshot of the product item that was ordered. prpos can change
  public class ProductItemOrdered
  {// its not gonna has an Id 'cause its gonna be owned by the order itself
    public ProductItemOrdered()
    {
    }

    public ProductItemOrdered(int productItemId, string productName, string pictureUrl)
    {
      ProductItemId = productItemId;
      ProductName = productName;
      PictureUrl = pictureUrl;
    }

    public int ProductItemId { get; set; }
    public string ProductName { get; set; }
    public string PictureUrl { get; set; }
  }
}