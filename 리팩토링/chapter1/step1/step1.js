import data from "../data.js";
// 함수 추출
// 전체 동작을 각각의 부분으로 나눌 수 있는 지점을 찾아 함수로 추출해내야 유지보수에 용이하다.

console.log(data);
function statement(invoice, plays) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let pref of invoice.performance) {
    result += `${playFor(pref).name} : ${usd(amountFor(pref))} (${
      pref.audience
    }석)\n`;
  }

  result += `총액 ${usd(totalAmount())}\n`;
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`;

  return result;

  function volumeCreditsFor(pref) {
    let result = 0;
    result += Math.max(pref.audience - 30, 0);

    if ("comedy" === playFor(pref).type)
      result += Math.floor(pref.audience / 5);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playId];
  }

  function amountFor(aPerformance) {
    let result = 0; // 좀 더 명확한 변수명 사용

    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 4000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르 :${playFor(aPerformance).type}`);
    }

    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalAmount() {
    let result = 0;
    for (let pref of invoice.performance) {
      result += amountFor(pref);
    }

    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let pref of invoice.performance) {
      result += volumeCreditsFor(pref);
    }
    return result;
  }
}

console.log(statement(data.invocides, data.plays));
