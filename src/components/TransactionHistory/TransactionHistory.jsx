import { Tr, Trthead } from './TransactionHistory.styled';
export const Transaction = ({ item }) => {
  return (
    <table className="transaction-history">
      <thead>
        <Trthead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Trthead>
      </thead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
             
         <td>{currency}</td>
            </Tr>
          );
        })}
      </tbody>
    </table>
  );
};

// TransactionHistory.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
