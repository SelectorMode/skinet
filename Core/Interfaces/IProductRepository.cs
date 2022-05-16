using Core.Entities;
using System.Collections.Generic;

namespace Core.Interfaces
{
    public interface IProductRepository
    {

        Task<Product> GetProductByIdAsync(int id);

        Task<IReadOnlyList<Product>> GetProductsAsync();

        Task<IReadOnlyList<ProductBrand>> GetBrandsAsync();

        Task<IReadOnlyList<ProductType>> GetTypesAsync();

    }
}
