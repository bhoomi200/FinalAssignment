using FinalApi.Models;
using FinalApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employee;


        public EmployeeController(IEmployeeRepository employee)
        {
            _employee = employee;
        }
        [HttpGet]
        [Route("GetEmployee")]
        public async Task<IActionResult> GetEmployees()
        {
            try
            {
                var result = _employee.GetEmployees();
                return StatusCode(200, result);

            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpGet]
        [Route("GetEmployeeByID/{Id}")]
        public async Task<IActionResult> GetEmpByID(int Id)
        {
            try
            {
                var result = _employee.GetEmployeeByID(Id);
                return StatusCode(200, result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpPost]
        [Route("AddEmployee")]
        public async Task<IActionResult> Post(Employee emp)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result =  _employee.InsertEmployee(emp);
                    return StatusCode(200, result);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpPut]
        [Route("UpdateEmployee")]
        public async Task<IActionResult> Put(Employee emp)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result =  _employee.UpdateEmployee(emp);
                    return StatusCode(200, result);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpDelete]
        [HttpDelete("{id}")]
        
        public async Task<IActionResult> DeleteStudent(int Id)
        {

            try
            {
                var result = _employee.DeleteEmployee(Id);
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
