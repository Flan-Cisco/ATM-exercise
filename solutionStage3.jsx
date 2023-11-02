const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  const inputColor = ["deposit-color", 'cashBack-color'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge ATM-input" >
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="input" min={0} className={inputColor[Number(!isDeposit)]} type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    console.log(isDeposit)
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (newTotal < 0) {
      alert("Not enough balance");
    } else {
      setTotalState(newTotal);
    
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <div className="action-container">
        <div>
          <button className="deposit-btn" onClick={() => setIsDeposit(true)}>Deposit</button>
          
        </div>
        <div>
          <button className="cashBack-btn" onClick={() => setIsDeposit(false)}>Cash Back</button>

        </div>
      </div>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
