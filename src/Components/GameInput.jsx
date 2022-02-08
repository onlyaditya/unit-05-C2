import { useRef, useState } from "react";
import "../Styles/GameInput.css";

const initState = {
  gamename: "",
  gameauthor: "",
  gameprice: "",
  gametags: "",
  forkids: false,
  gamedesc: "",
  gamerating: "",
};
export const GameInput = ({ handleSubmit }) => {
  const [data, setData] = useState(initState);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "gameprice" || name === "gameraring") {
      setData({ ...data, [name]: Number(value) });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(data);
    setData(initState);
  };

  return (
    <div>
      <h1 className="title">Add Game</h1>
      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
        id="addgame"
        ref={formRef}
      >
        <input
          type="text"
          required
          value={data.gamename}
          name="gamename"
          placeholder="Game name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          value={data.gameauthor}
          name="gameauthor"
          placeholder="Game Author"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          value={data.gametags}
          name="gametags"
          placeholder="Game tags"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          value={data.gameprice}
          name="gameprice"
          placeholder="Game Price"
          onChange={(e) => handleChange(e)}
        />
        <textarea
          name="gamedesc"
          required
          value={data.gamedesc}
          cols="30"
          rows="10"
          onChange={(e) => handleChange(e)}
        />

        <div>
          <label htmlFor="forkids">For Kids</label>
          <input
            type="checkbox"
            name="forkids"
            id="forkids"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor="gamerating">Rating</label>
          <select
            name="gamerating"
            id="gamerating"
            value={data.gamerating}
            onChange={(e) => handleChange(e)}
          >
            <option value=""></option>
            <option value="1">*</option>
            <option value="2">* *</option>
            <option value="3">* * *</option>
            <option value="4">* * * *</option>
            <option value="5">* * * * *</option>
          </select>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};
