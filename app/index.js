// Import js files
import * as utils from "./utils.js";

// Start Code
ZOHO.embeddedApp.on("PageLoad", async (data) => {
  let getEntity = data?.Entity;
  let getEntityIds = data?.EntityId;

  let allData = [];

  // Resize the widget window
  ZOHO.CRM.UI.Resize({ height: "90%", width: "70%" });

  // Loop through each ID and fetch data
  for (const getID of getEntityIds) {
    const response = await ZOHO.CRM.API.getRecord({
      Entity: getEntity,
      RecordID: getID,
    });

    allData.push(...(response?.data || []));
  }

  // Used Function from another JS file
  let getowner = utils.returnOwner(allData);
  document.getElementById("allData").innerText = JSON.stringify(
    getowner,
    null,
    2
  );
});

ZOHO.embeddedApp.init();
