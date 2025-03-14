import App from "./App";
import Button from "./Button";

function FormAddFriend() {
    return (
        <form action="" className="form-add-friend">
            <label htmlFor="">🧑‍🤝‍🧑 Friend Name</label>
            <input type="text" name="" id="" />

            <label htmlFor="">🖼️ Image URL</label>
            <input type="text" name="" id="" />

            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend;