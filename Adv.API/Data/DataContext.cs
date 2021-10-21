using Adv.API.Model;
using Microsoft.EntityFrameworkCore;

namespace Adv.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Acao> Acao { get; set; }

    }

}