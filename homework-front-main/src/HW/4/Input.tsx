import React from "react";

type InputPropsType = {
	currentText: string// НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (text: string) => void// НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value)
	};
	const isEven = props.currentText.length % 2 === 0;
	 return (
	   <input id={'hw04-input'}
			  type="text"
			  value={props.currentText}
			  onChange={onChangeHandler}
			  // className={isEven ? "chetNechet" : ""}
	   />
	 );
};
