import createStatementData from "./createStatementData.js";
import data from "../data.js";

// 중첩 함수

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let pref of data.performance) {
    result += `${pref.play.name} : ${usd(pref.amount)} (${pref.audience}석)\n`;
  }

  result += `총액 ${usd(data.totalAmount)}\n`;
  result += `적립 포인트 : ${data.totalVolumeCredits}점 \n`;

  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  result += "<table/>\n";
  result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>";
  for (let pref of data.performance) {
    result += `<tr><td>${pref.play.name}</td><td>(${pref.audience}석)</td>\n`;
    result += `<td>${usd(pref.amount)} </td><tr/>`;
  }
  result += "</table>\n";
  result += `총액 ${usd(data.totalAmount)}\n`;
  result += `적립 포인트 : ${data.totalVolumeCredits}점 \n`;

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

console.log(statement(data.invocides, data.plays));
