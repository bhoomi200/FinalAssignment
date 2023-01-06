using FinalApi.Models;

namespace FinalApi.Repository
{
    
        public interface IEmployeeRepository
        {
            public List<Employee> GetEmployees();
            Employee GetEmployeeByID(int ID);
            Employee InsertEmployee(Employee objEmployee);
            Employee UpdateEmployee(Employee objEmployee);
            bool DeleteEmployee(int ID);
        }
    
}
