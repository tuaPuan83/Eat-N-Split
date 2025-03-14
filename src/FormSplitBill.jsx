import App from "./App";
import FriendsList from "./FriendsList";
import Friend from "./Friend";
import Button from "./Button";

function FormSplitBill() {
    return (
        <form action="" className="form-split-bill">
            <h2>Split Bill with X</h2>

            <label htmlFor="">🏦 Bill Value</label>
            <input type="text" name="" id="" />

            <label htmlFor="">∏💴 Your Expense</label>
            <input type="text" name="" id="" />

            <label htmlFor="">💁 X's Expense</label>
            <input type="text" name="" id="" disabled />

            <label htmlFor="">❓ Who is paying the bill</label>
            <select name="" id="">
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}

export default FormSplitBill;