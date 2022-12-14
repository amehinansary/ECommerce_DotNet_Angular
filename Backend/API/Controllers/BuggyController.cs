using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{ // for getting some errors asl heya na2sa :D, mashy kways fel course w fahm el danya tb
  // e3ml l nafsak shwayt errors 3shan tezha2 lol
  public class BuggyController : BaseApiController
  {
    private readonly StoreContext _context;
    public BuggyController(StoreContext context)
    {
      _context = context;
    }

    [HttpGet("testauth")]
    [Authorize]
    public ActionResult<string> GetSecretText()
    {
      return "secret stuff";
    }

    [HttpGet("notfound")]
    public ActionResult GetNotFoundRequest()
    {
      var thing = _context.Products.Find(42);

      if (thing == null) return NotFound(new ApiResponse(404));

      return Ok();
    }

    [HttpGet("servererror")]
    public ActionResult GetServerError()
    {
      var thing = _context.Products.Find(42);

      var thingToReturn = thing.ToString();

      return Ok();
    }

    [HttpGet("badrequest")]
    public ActionResult GetBadRequest()
    {
      return BadRequest(new ApiResponse(400));
    }

    [HttpGet("badrequest/{id}")]
    public ActionResult GetNotFoundRequest(int id)
    {
      return Ok();
    }
  }
}