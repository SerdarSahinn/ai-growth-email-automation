function doGet(e) {
  var params = e.parameter;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email Tracking");
  var timestamp = new Date();
  
  var email = params.email;
  var campaign = params.campaign;
  var segment = params.segment;
  var link = params.link;
  
  // Link parametresi varsa link tıklanma, yoksa email açılma
  if (link) {
    sheet.appendRow([
      email, 
      campaign, 
      "linke_girildi", 
      timestamp, 
      "Linke girildi - " + segment + " - " + link
    ]);
  } else {
    sheet.appendRow([
      email, 
      campaign, 
      "mail_acildi", 
      timestamp, 
      "Mail açıldı - " + segment
    ]);
  }
  
  var blob = Utilities.newBlob(
    Utilities.base64Decode("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
    "image/gif"
  );
  
  return ContentService
    .createTextOutput(blob.getDataAsString())
    .setMimeType(ContentService.MimeType.GIF);
}

function doPost(e) {
  var params = e.parameter;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email Tracking");
  var timestamp = new Date();
  
  var email = params.email;
  var campaign = params.campaign;
  var segment = params.segment;
  var link = params.link;
  
  // Link tıklanma kaydı
  sheet.appendRow([
    email, 
    campaign, 
    "linke_girildi", 
    timestamp, 
    "Linke girildi - " + segment + " - " + link
  ]);
  
  return ContentService.createTextOutput("OK");
}