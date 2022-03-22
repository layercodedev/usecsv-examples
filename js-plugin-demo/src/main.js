import useCsvPlugin from "@usecsv/js";

function importData(){
  useCsvPlugin({
    importerKey: "your-importer-key",
    user: { userId: "12345" },
    metadata: { anotherId: "1" },
    onData:(data=>{console.log("data:",data)})
   });
}

var importButton = document.getElementById('import-data-button');

importButton.onclick = importData;