import Pagination from 'react-bootstrap/Pagination';
import './PaginationComponent.css';

const PaginationComponent = ({ totalPages, activePage, onPageChange, size = 'md' }) => {
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="pagination-container">
      <Pagination size={size}>{items}</Pagination>
    </div>
  );
};

export default PaginationComponent;