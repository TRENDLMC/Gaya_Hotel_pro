// import { useEffect, useRef, useState } from "react";
// import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
// import { nanoid } from "nanoid";

// //test_sk_OALnQvDd2VJXogwRnoN8Mj7X41mN 테스트 시크릿 키
// const selector = "#payment-widget";
// const clientKey = "test_ck_YyZqmkKeP8gg7keqn1d8bQRxB9lG";
// const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

// export function CheckoutPage() {
//   const paymentWidgetRef = useRef(null);
//   const paymentMethodsWidgetRef = useRef(null);
//   const [price, setPrice] = useState(50_000);

//   useEffect(() => {
//     (async () => {
//       const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

//       const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
//         selector,
//         { value: price }
//       );

//       paymentWidgetRef.current = paymentWidget;
//       paymentMethodsWidgetRef.current = paymentMethodsWidget;
//     })();
//   }, []);

//   useEffect(() => {
//     const paymentMethodsWidget = paymentMethodsWidgetRef.current;

//     if (paymentMethodsWidget == null) {
//       return;
//     }

//     paymentMethodsWidget.updateAmount(
//       price,
//       paymentMethodsWidget.UPDATE_REASON.COUPON
//     );
//   }, [price]);

//   return (
//     <div>
//       <h1>주문서</h1>
//       <span>{`${price.toLocaleString()}원`}</span>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             onChange={(event) => {
//               setPrice(event.target.checked ? price - 5_000 : price + 5_000);
//             }}
//           />
//           5,000원 할인 쿠폰 적용
//         </label>
//       </div>
//       <div id="payment-widget" />
//       <button
//         onClick={async () => {
//           const paymentWidget = paymentWidgetRef.current;

//           try {
//             await paymentWidget?.requestPayment({
//               orderId: nanoid(),
//               orderName: "토스 티셔츠 외 2건",
//               customerName: "김토스",
//               customerEmail: "customer123@gmail.com",
//               successUrl: `${window.location.origin}/success`,
//               failUrl: `${window.location.origin}/fail`,
//             });
//           } catch (error) {
//             // handle error
//           }
//         }}
//       >
//         결제하기
//       </button>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react" 
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
  ANONYMOUS,
} from "@tosspayments/payment-widget-sdk" 

const clientKey = "test_ck_YyZqmkKeP8gg7keqn1d8bQRxB9lG" 
const customerKey = "xgntPDAOHU56X4nL8YL-v" 

export function CheckoutPage() {
  const paymentWidgetRef = useRef(null) 
  const paymentMethodsWidgetRef = useRef(null) 
  const [price, setPrice] = useState(50000) 

  useEffect(() => {
    (async () => {
      // ------  결제위젯 초기화 ------
      // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)  // 회원 결제
      // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS)  // 비회원 결제

      // ------  결제위젯 렌더링 ------
      // 결제수단 UI를 렌더링할 위치를 지정합니다. `#payment-method`와 같은 CSS 선택자와 결제 금액 객체를 추가하세요.
      // DOM이 생성된 이후에 렌더링 메서드를 호출하세요.
      // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      ) 

      // ------  이용약관 렌더링 ------
      // 이용약관 UI를 렌더링할 위치를 지정합니다. `#agreement`와 같은 CSS 선택자를 추가하세요.
      // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자
      paymentWidget.renderAgreement("#agreement") 

      paymentWidgetRef.current = paymentWidget 
      paymentMethodsWidgetRef.current = paymentMethodsWidget 
    })() 
  }, []) 

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current 

    if (paymentMethodsWidget == null) {
      return 
    }

    // ------ 금액 업데이트 ------
    // 새로운 결제 금액을 넣어주세요.
    // https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    ) 
  }, [price]) 

  return (
    <div>
      <h1>주문서</h1>
      <span>{`${price.toLocaleString()}원`}</span>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={(event) => {
              setPrice(event.target.checked ? price - 5000 : price + 5000) 
            }}
          />
          5,000원 할인 쿠폰 적용
        </label>
      </div>
      <div id="payment-widget" />
      <div id="agreement" />
      <button
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current 

          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 더 많은 결제 정보 파라미터는 결제위젯 SDK에서 확인하세요.
            // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
            // 아래 4개는 필수 입력 사항임.
            await paymentWidget?.requestPayment({
              orderId: "89VsVukGsuuosn30-dt27",
              orderName: "토스 티셔츠 외 2건",
              successUrl: `${window.location.origin}/success`,
              failUrl: `${window.location.origin}/fail`,
            }) 
          } catch (error) {
            // 에러 처리하기
            console.error(error) 
          }
        }}
      >
        결제하기
      </button>
    </div>
  ) 
}
