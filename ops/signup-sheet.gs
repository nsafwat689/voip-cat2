/**
 * US auto-dialer traffic registration -> Google Sheet.
 *
 * Deploy: Extensions > Apps Script on the destination sheet, paste this,
 * set SECRET below to match SIGNUP_SHEET_SECRET on Vercel, then
 * Deploy > New deployment > Web app, execute as me, access "Anyone".
 * The /exec URL goes into SIGNUP_SHEET_WEBHOOK on Vercel.
 */

var SECRET = 'CHANGE_ME';
var SHEET = 'Leads';

var COLUMNS = [
  ['Received', 'Received'],
  ['Legal name', 'legalName'],
  ['Trading name', 'tradingName'],
  ['Country', 'country'],
  ['Entity type', 'entityType'],
  ['Address', 'address'],
  ['Website', 'website'],
  ['Years trading', 'yearsTrading'],
  ['EIN', 'ein'],
  ['FCC 499 Filer ID', 'fcc499'],
  ['RMD', 'rmd'],
  ['OCN', 'ocn'],
  ['STIR/SHAKEN', 'stirShaken'],
  ['SPC token', 'spcToken'],
  ['State licences', 'stateLicence'],
  ['Business type', 'businessType'],
  ['Contact name', 'contactName'],
  ['Job title', 'jobTitle'],
  ['Email', 'email'],
  ['Phone', 'phone'],
  ['Messenger', 'messenger'],
  ['Timezone', 'timezone'],
  ['Signalling IPs', 'signallingIps'],
  ['Media IPs', 'mediaIps'],
  ['Switch', 'switchPlatform'],
  ['Dialer', 'dialerPlatform'],
  ['Transport', 'transport'],
  ['Encryption', 'srtp'],
  ['Codecs', 'codecs'],
  ['DTMF', 'dtmf'],
  ['Connection', 'registration'],
  ['CLI source', 'cliSource'],
  ['CLI passthrough', 'cliPassthrough'],
  ['CNAM', 'cnam'],
  ['DID count', 'didCount'],
  ['Concurrent calls', 'concurrentCalls'],
  ['CPS', 'cps'],
  ['ACD', 'acd'],
  ['ASR', 'asr'],
  ['Monthly minutes', 'monthlyMinutes'],
  ['Peak hours', 'peakHours'],
  ['Destinations', 'destinations'],
  ['Traffic type', 'trafficType'],
  ['AMD', 'amd'],
  ['Current provider', 'currentProvider'],
  ['Current rate', 'currentRate'],
  ['Billing increment', 'billingIncrement'],
  ['Start date', 'startDate'],
  ['Notes', 'notes'],
  ['Consent', 'Consent'],
  ['IP', 'IP'],
  ['Geo country', 'Geo country'],
  ['Forwarded chain', 'Forwarded chain'],
  ['Page', 'Page'],
  ['Referrer', 'Referrer'],
  ['User agent', 'User agent'],
  ['Status', '_status']
];

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
  if (sh.getLastRow() === 0) {
    var head = COLUMNS.map(function (c) { return c[0]; });
    sh.appendRow(head);
    sh.getRange(1, 1, 1, head.length)
      .setFontWeight('bold')
      .setBackground('#001B3D')
      .setFontColor('#ffffff');
    sh.setFrozenRows(1);
  }
  return sh;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var body = JSON.parse(e.postData.contents);
    if (SECRET !== 'CHANGE_ME' && body.secret !== SECRET) {
      return ContentService.createTextOutput('forbidden')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    var p = body.payload || {};
    var row = COLUMNS.map(function (c) {
      if (c[1] === '_status') return 'New';
      var v = p[c[1]];
      return v === undefined || v === null ? '' : String(v);
    });
    sheet_().appendRow(row);
    return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err)
      .setMimeType(ContentService.MimeType.TEXT);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
}
