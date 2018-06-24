using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSPart1.Controllers
{
    [RoutePrefix("api/sample")]
    public class SampleController : ApiController
    {
        [Route("getdata")]
        [HttpGet]
        public IHttpActionResult GetData()
        {
            string[] data = {"Lucy Barletta","Louella Bun","Conrad Blish","Alvina Speck","Elia Sarabia","Galen Tolan","Nisha Amin","Keenan Justice",
                "Mireya Alongi","Roni Gabler","Lilliam Eagle","Samatha Vannostrand","Tanner Tisby","Kanesha Puchalski","Carmelita Shute","Damien Winslow",
                "Roberta Dunkerson","Chance Portalatin","Boris Zak","Loralee Marciniak","Annelle Mcdonell","Carissa Buresh","Luisa Schipper","Jacqualine Gresham",
                "Adam Pal","Hyman Cosey","Katy Solorzano","Novella Owusu","Rozanne Mccary","Takisha Desantis","Vivian Loch","Shery Lichty","Ernestina Sullivan",
                "Melony Trowell","Demetra Kellison","Oralee Motz","Yajaira Wadlington","Jesica Pop","Wava Pea","An Eyler","Porfirio Brittan","Zane Vantrease",
                "Domonique Jeanbart","Judson Decicco","Mauro Timm","Ethel Shedd","Violette Elsass","Cleotilde Cardiel","Dollie Groll","Diane Jensen" };
            return Ok(data);
        }

        [Route("post")]
        [HttpPost]
        public IHttpActionResult Post(string[] data)
        {
            if (data != null)
            {
                return Ok("Data received");
            }
            else
            {
                return BadRequest("Data not received");
            }
        }
    }
}
