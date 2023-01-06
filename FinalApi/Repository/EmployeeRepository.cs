using FinalApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FinalApi.Repository
{
    public class EmployeeRepository:IEmployeeRepository
    {
        private readonly FinalDbContext _appDBContext;
        public EmployeeRepository(FinalDbContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public List <Employee> GetEmployees()
        {
            return  _appDBContext.Employees.ToList();
        }
        public Employee GetEmployeeByID(int ID)
        {
            return  _appDBContext.Employees.Find(ID);
        }
        public Employee InsertEmployee(Employee objEmployee)
        {
            _appDBContext.Employees.Add(objEmployee);
            _appDBContext.SaveChangesAsync();
            return objEmployee;
        }
        public Employee UpdateEmployee(Employee objEmployee)
        {
            _appDBContext.Entry(objEmployee).State = EntityState.Modified;
            _appDBContext.SaveChangesAsync();
            return objEmployee;
        }
        public bool DeleteEmployee(int ID)
        {
            bool result = false;
            var employee = _appDBContext.Employees.Find(ID);
            if (employee != null)
            {
                _appDBContext.Entry(employee).State = EntityState.Deleted;
                _appDBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

    }
}
