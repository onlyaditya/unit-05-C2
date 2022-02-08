import "../Styles/GameDisplay.css";

export const GamesDisplay = ({games, handleNameSort, handleStarSort, handlePriceSort, handleSearch})=>{
    
    return <div className="display">
        <input type="text" id="searchbox" placeholder="Search" onChange={handleSearch}/>
        <table id="table">
        <thead>
            <tr>
                <td className="gamename">Name<button onClick={handleNameSort}>Sort</button></td>
                <td>Author</td>
                <td>Tags</td>
                <td  >Price <button id="sortbyprice" onClick={handlePriceSort}>Sort</button></td>
                <td>IsForkids</td>
                <td >Rating <button id="sortbyrating" onClick={handleStarSort}>sort</button></td>
            </tr>
        </thead>
        <tbody>
            {
                games?.map((el)=>
                    <tr className="gamerow" key={el.id}>
                        <td className="gamename" >{el.gamename}</td>
                        <td>{el.gameauthor}</td>
                        <td>{el.gametags}</td>
                        <td className="gameprice">{el.gameprice}</td>
                        <td>{el.forkids? "yes" : "No" }</td>
                        <td className="gamerating">{el.gamerating}</td>
                    </tr>
                )
            }
        </tbody>
        </table>
    </div>
}