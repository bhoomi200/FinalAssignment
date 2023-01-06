using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FinalApi.Models;

public partial class FinalDbContext : DbContext
{
    //public FinalDbContext()
    //{
    //}

    public FinalDbContext(DbContextOptions<FinalDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Employees { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Server=BLR1-LHP-N80988\\SQLEXPRESS;Database=FinalDB;Integrated Security=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmpId).HasName("PK__Employee__AF2DBB99C5AF72E4");

            entity.ToTable("Employee");

            entity.Property(e => e.EmpBand)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EmpDes)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EmpName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EmpRes)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EmpRole)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
