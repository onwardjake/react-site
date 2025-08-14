import React, { useMemo, useState } from 'react';

const ExUseMemo02 = () => {
	const [price, setPrice] = useState(1000);
	const [quantity, setQuantity] = useState(1);
	const [discount, setDiscount] = useState(0.1);

	const total = useMemo(() => {
		console.log(
			`금액 : ${price}, 개수 : ${quantity}, 할인율 : ${discount}`
		);
		return price * quantity * (1 - discount);
	}, [price, quantity, discount]);

	return (
		<>
			{/* input 태그에서 들어오는 문자열 값을 +를 붙여서 숫자로 변환 */}
			{/* HTML에서는 label 태그에 사용되는 for 속성이 맞지만, 
            React(JSX)에서는 Javascript의 for 예약어와의 충돌 및 호환성 문제 때문에 
            for라는 속성이 아니라 htmlFor 속성을 사용해야 합니다. */}

			{/* label의 htmlFor 값과 input의 id 값이 서로 일치해야 연결이 정상적으로 이루어집니다.
            htmlFor와 id를 일치시켜 놓으면 라벨을 클릭했을 때 해당 input이 포커스됩니다.
			 */}

			{/* input의 name 속성은 폼(form)이 제출될 때, 각 input의 값을 구분하기 위한 필드 이름으로 사용됩니다.
            서버/백엔드에서 어떤 값이 어떤 필드에 해당하는지 의미를 부여합니다.
            <input name="discount" ... /> → 폼을 제출하면 discount=값 형식으로 데이터가 전송됩니다.
            같은 폼 내에서 name 값이 같아도 무방하며, 배열처럼 여러 input 값을 서버로 보낼 수 있습니다.
			 */}

			<label htmlFor="price">
				가격 :
				<input
					type="number"
					id="price"
					value={price}
					onChange={(e) => setPrice(+e.target.value)}
				/>
			</label>
			<label htmlFor="quantity">
				수량 :
				<input
					type="number"
					id="quantity"
					value={quantity}
					onChange={(e) => setQuantity(+e.target.value)}
				/>
			</label>
			<label htmlFor="discount">
				할인율 :
				<input
					type="number"
					step="0.1"
					id="discount"
					value={discount}
					onChange={(e) => setDiscount(+e.target.value)}
				/>
			</label>
			<h3>총액은 {total.toLocaleString()}원 입니다.</h3>
		</>
	);
};

export default ExUseMemo02;
