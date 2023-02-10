import React, { useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy({botData, onBotArmyAdd}) {
  //your bot army code here...
  const [bot, setBot] = useState()
 

  const armyBotList = botData.map((eachBot) => {
    return <BotCard key={eachBot.id} bot={eachBot} onBotArmyAdd={onBotArmyAdd} />
  })


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {/* {<BotCard bot={bot} onBotArmyAdd={()=>renderChosenBot} />} */}
          {armyBotList}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
