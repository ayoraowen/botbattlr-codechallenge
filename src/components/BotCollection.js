import React from "react";
import BotCard from "./BotCard";

function BotCollection({botData, onBotArmyAdd}) {
  //Your code here
  const botCards = botData.map((eachBot) => {
     return (
       <BotCard key={eachBot.id} bot={eachBot} onBotArmyAdd={onBotArmyAdd}/>
     )
    // console.log(eachBot)
  }
  )
  console.log(botData)





  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {botCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
