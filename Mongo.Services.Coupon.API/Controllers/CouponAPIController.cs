using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mongo.Services.AuthAPI.Data;
using Mongo.Services.AuthAPI.Models;
using Mongo.Services.AuthAPI.Models.Dto;

namespace Mongo.Services.AuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponAPIController : ControllerBase
    {
        private readonly AppDbContext appDbContext;
        private readonly IMapper mapper;
        private ResponseDto _response;


        public CouponAPIController(AppDbContext appDbContext, IMapper mapper)
        {
            this.appDbContext = appDbContext;
            this.mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public ResponseDto Get()
        {
            try
            {
                IEnumerable<Coupon> obj = appDbContext.Coupons.ToList();
                _response.Result = mapper.Map<IEnumerable<CouponDto>>(obj);

            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }
        [HttpGet]
        [Route("{id:int}")]
        public ResponseDto Get(int id)
        {
            try
            {
                Coupon obj = appDbContext.Coupons.FirstOrDefault(op => op.CouponId == id);
                _response.Result = mapper.Map<CouponDto>(obj);


            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }
        [HttpGet]
        [Route("getbycode/{code}")]
        public ResponseDto Get(string code)
        {
            try
            {
                Coupon obj = appDbContext.Coupons.FirstOrDefault(op => op.CouponCode.ToLower() == code.ToLower());
                _response.Result = mapper.Map<CouponDto>(obj);


            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpPost]
        [Authorize(Roles ="ADMIN")]
        public ResponseDto Post([FromBody] CouponDto couponDto)
        {
            try
            {
                Coupon obj =mapper.Map<Coupon>(couponDto);
                 appDbContext.Coupons.Add(obj);
                 appDbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpPut]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto Put([FromBody] CouponDto couponDto)
        {
            try
            {
                Coupon obj = mapper.Map<Coupon>(couponDto);
                appDbContext.Coupons.Update(obj);
                appDbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpDelete]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto Delete(int Id)
        {
            try
            {
               
                Coupon obj=appDbContext.Coupons.First(u=>u.CouponId==Id);
                appDbContext.Coupons.Remove(obj);
                appDbContext.SaveChanges() ;
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

    }
}
