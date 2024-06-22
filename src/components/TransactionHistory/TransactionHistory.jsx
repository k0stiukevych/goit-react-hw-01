import css from "./TransactionHistory.module.css";

import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.tableStyle}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            return (
              <tr
                key={item.id}
                className={clsx(
                  index % 2 === 0 ? css.transparent : css.notTransp
                )}
              >
                <TransactionHistoryItem transaction={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
