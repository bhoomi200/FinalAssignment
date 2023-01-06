using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace FinalApi.Models;

public partial class Employee
{
    public int EmpId { get; set; }
    [Required]
 
    public string? EmpName { get; set; }
    [Required]

    public string? EmpBand { get; set; }
    [Required]

    public string? EmpRole { get; set; }
    [Required]

    public string? EmpDes { get; set; }
    [Required]

    public string? EmpRes { get; set; }
}
