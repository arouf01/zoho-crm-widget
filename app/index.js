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

  document.getElementById("allData").innerText = JSON.stringify(
    allData,
    null,
    2
  );
});

ZOHO.embeddedApp.init();
