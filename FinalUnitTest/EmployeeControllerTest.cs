using AutoFixture;
using FinalApi.Controllers;
using FinalApi.Models;
using FinalApi.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace FinalUnitTest
{
    public class EmployeeControllerTest
    {
        private readonly Mock<IEmployeeRepository> employeeRepository;
        private Fixture _fixture;
        private EmployeeController _controller;

        public EmployeeControllerTest()
        {
            _fixture = new Fixture();
            employeeRepository = new Mock<IEmployeeRepository>();
        }
        [Fact]
        public async Task Get_Employee_returnsOK()
        {
            var employee = _fixture.CreateMany<Employee>(3).ToList();
            employeeRepository.Setup(x => x.GetEmployees()).Returns(employee);
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.GetEmployees();
            var obj = result as ObjectResult;
            Assert.Equal(200, obj.StatusCode);

        }

        [Fact]
        public async Task Get_EmployeebyId_returnsOK()
        {
            var employee = _fixture.Create<Employee>();
            employeeRepository.Setup(x => x.GetEmployeeByID(employee.EmpId)).Returns(employee);
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.GetEmpByID(employee.EmpId);
            var obj = result as ObjectResult;
            Assert.Equal(200, obj.StatusCode);

        }
        [Fact]
        public async Task Get_Employee_ThrowException()
        {

            employeeRepository.Setup(x => x.GetEmployees()).Throws(new Exception());
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.GetEmployees();
            var obj = result as ObjectResult;
            Assert.Equal(400, obj.StatusCode);

        }
        [Fact]
        public async Task Get_EmployeebyId_ThrowsException()
        {
            employeeRepository.Setup(x => x.GetEmployeeByID(It.IsAny<int>())).Throws(new Exception());
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.GetEmpByID(1);
            var obj = result as ObjectResult;
            Assert.Equal(400, obj.StatusCode);

        }
        [Fact]
        public async Task POST_Employee_returnsOK()
        {
            var employee = _fixture.Create<Employee>();
            employeeRepository.Setup(x => x.InsertEmployee(It.IsAny<Employee>())).Returns(employee);
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.Post(employee);
            var obj = result as ObjectResult;
            Assert.Equal(200, obj.StatusCode);

        }
        [Fact]
        public async Task POST_Employee_ThrowsException()
        {
            var employee = _fixture.Create<Employee>();
            employeeRepository.Setup(x => x.InsertEmployee(It.IsAny<Employee>())).Throws(new Exception());
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.Post(employee);
            var obj = result as ObjectResult;
            Assert.Equal(400, obj.StatusCode);

        }
        [Fact]
        public async Task Put_Employee_returnsOK()
        {
            var employee = _fixture.Create<Employee>();
            employeeRepository.Setup(x => x.UpdateEmployee(It.IsAny<Employee>())).Returns(employee);
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.Put(employee);
            var obj = result as ObjectResult;
            Assert.Equal(200, obj.StatusCode);

        }
        [Fact]
        public async Task Put_Employee_ThrowsException()
        {
            var employee = _fixture.Create<Employee>();
            employeeRepository.Setup(x => x.UpdateEmployee(It.IsAny<Employee>())).Throws(new Exception());
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.Put(employee);
            var obj = result as ObjectResult;
            Assert.Equal(400, obj.StatusCode);

        }
        [Fact]
        public async Task Delete_Employee_returnsOK()
        {

            employeeRepository.Setup(x => x.DeleteEmployee(It.IsAny<int>())).Returns(true);
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.DeleteStudent(1);
            var obj = result as ObjectResult;
            Assert.Equal(200, obj.StatusCode);

        }
        [Fact]
        public async Task Delete_Student_ThrowsException()
        {

            employeeRepository.Setup(x => x.DeleteEmployee(It.IsAny<int>())).Throws(new Exception());
            _controller = new EmployeeController(employeeRepository.Object);
            var result = await _controller.DeleteStudent(1);
            var obj = result as ObjectResult;
            Assert.Equal(400, obj.StatusCode);

        }
    }
}