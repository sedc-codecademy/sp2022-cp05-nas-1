using NewsAggregator.DataAccess.Abstraction;
using NewsAggregator.Domain.Entities;
using NewsAggregator.Services.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewsAggregator.Services.Implementation
{
    public class PlaceholderService : IPlaceholderService
    {
        private readonly IRepository<PlaceholderDTO> _placeholderRepository;

        public PlaceholderService(IRepository<PlaceholderDTO> placeholderRepository)
        {
            _placeholderRepository = placeholderRepository;
        }
    }
}
