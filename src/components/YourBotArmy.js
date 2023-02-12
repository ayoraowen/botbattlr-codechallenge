import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function YourBotArmy({botData, onBotArmyAdd, removeArmyBot}) {
  //your bot army code here...
  const [bot, setBot] = useState([]);

  useEffect(() => {
    setBot(botData)}, [botData]);

  console.log(bot)
  function handleBotRemove(e) { 
    
  
    // const remainingBots = bot.filter((eachBot) => { 
    //   // console.log(eachBot.id)
    //   // console.log(Number(e.currentTarget.id))
    //   // console.log(typeof eachBot.id)
    //   // console.log(typeof Number(e.currentTarget.id))


    //   return eachBot.id!==Number(e.currentTarget.id)
      
    //  //if (eachBot.id===e.currentTarget.id)
    //  //return true
     
    //  //else {return null}
      
    // })
    
    // botData=remainingBots
    // setBot(remainingBots)
    // console.log(remainingBots)
    

    console.log(botData)
   
  }
  console.log(botData)
  console.log(bot)

  //<div  key={eachBot.id}>{/*onClick={handleBotRemove}*/}</div>
 



  const armyBotList = bot.map((eachBot) => {
    return (
      <div className="ui column" id={eachBot.id} key={eachBot.id} onClick={removeArmyBot}>
        <BotCard key={eachBot.id} bot={eachBot} onBotArmyAdd={onBotArmyAdd} />
      </div>
    )
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
