import { useState } from "react";

export default function RandomNumbers() {
  const [threeDigitNumber1, setThreeDigitNumber1] = useState("");
  const [threeDigitNumber2, setThreeDigitNumber2] = useState("");
  const [threeDigitNumber3, setThreeDigitNumber3] = useState("");
  const [threeDigitNumber4, setThreeDigitNumber4] = useState("");
  const [twoDigitNumber, setTwoDigitNumber] = useState("");

  // สุ่มเลข 3 หลัก
  const randomThreeDigitNumber = () => {
    return Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
  };

  // สุ่มเลข 2 หลัก
  const randomTwoDigitNumber = () => {
    return Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
  };

  // เก็บตัวเลขที่สุ่มได้
  const setNumbers = () => {
    let newThreeDigitNumber1,
      newThreeDigitNumber2,
      newThreeDigitNumber3,
      newThreeDigitNumber4,
      newTwoDigitNumber;

    // สร้างเลขใหม่และตรวจสอบค่าที่ซ้ำ
    do {
      newThreeDigitNumber1 = randomThreeDigitNumber();
    } while (newThreeDigitNumber1 === threeDigitNumber1);
    do {
      newThreeDigitNumber2 = randomThreeDigitNumber();
    } while (newThreeDigitNumber2 === threeDigitNumber2);
    do {
      newThreeDigitNumber3 = randomThreeDigitNumber();
    } while (newThreeDigitNumber3 === threeDigitNumber3);
    do {
      newThreeDigitNumber4 = randomThreeDigitNumber();
    } while (newThreeDigitNumber4 === threeDigitNumber4);
    do {
      newTwoDigitNumber = randomTwoDigitNumber();
    } while (newTwoDigitNumber === twoDigitNumber);

    setThreeDigitNumber1(newThreeDigitNumber1);
    setThreeDigitNumber2(newThreeDigitNumber2);
    setThreeDigitNumber3(newThreeDigitNumber3);
    setThreeDigitNumber4(newThreeDigitNumber4);
    setTwoDigitNumber(newTwoDigitNumber);

    // เก็บตัวเลขที่สุ่มได้ไว้ใน sessionStorage
    sessionStorage.setItem("number1", newThreeDigitNumber1);
    sessionStorage.setItem("number2", newThreeDigitNumber2);
    sessionStorage.setItem("number3", newThreeDigitNumber3);
    sessionStorage.setItem("number4", newThreeDigitNumber4);
    sessionStorage.setItem("number5", newTwoDigitNumber);
  };

  const num1 = sessionStorage.getItem("number1"); // รางวัลที่ 1
  const num2 = sessionStorage.getItem("number2"); // รางวัลที่ 2
  const num3 = sessionStorage.getItem("number3"); // รางวัลที่ 2
  const num4 = sessionStorage.getItem("number4"); // รางวัลที่ 2
  const num5 = sessionStorage.getItem("number5"); // รางวัลเลขท้าย 2 ตัว

  // แปลงเลขจาก string เป็น Int
  const parsedNumber = parseInt(num1, 10);
  // หาเลขใกล้เคียงกับรางวัลที่ 1
  const nearestNumberLess = (parsedNumber - 1).toString().padStart(3, "0"); // รางวัลเลขใกล้เคียงรางวัลที่ 1
  const nearestNumberMore = (parsedNumber + 1).toString().padStart(3, "0"); // รางวัลเลขใกล้เคียงรางวัลที่ 1

  // เช็ครางวัล
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () => {
    if (inputValue === num1) {
      if (inputValue.slice(-2) === num5) {
        setResult(
          `ยินดีด้วย!!! ${inputValue} ถูกรางวัลที่ 1 และรางวัลเลขท้าย 2 ตัว`
        );
      } else {
        setResult(`ยินดีด้วย!!! ${inputValue} ถูกรางวัลที่ 1`);
      }
    } else if (
      inputValue === nearestNumberLess ||
      inputValue === nearestNumberMore
    ) {
      if (inputValue.slice(-2) === num5) {
        setResult(
          `ยินดีด้วย!!! ${inputValue} ถูกรางวัลเลขใกล้เคียงรางวัลที่ 1 และรางวัลเลขท้าย 2 ตัว`
        );
      } else {
        setResult(
          `ยินดีด้วย!!! ${inputValue} ถูกรางวัลเลขใกล้เคียงรางวัลที่ 1`
        );
      }
    } else if (
      inputValue === num2 ||
      inputValue === num3 ||
      inputValue === num4
    ) {
      if (inputValue.slice(-2) === num5) {
        setResult(
          `ยินดีด้วย!!! ${inputValue} ถูกรางวัลที่ 2 และรางวัลเลขท้าย 2 ตัว`
        );
      } else {
        setResult(`ยินดีด้วย!!! ${inputValue} ถูกรางวัลที่ 2`);
      }
    } else if (inputValue.slice(-2) === num5) {
      setResult(`ยินดีด้วย!!! ${inputValue} ถูกรางวัลเลขท้าย 2 ตัว`);
    } else {
      setResult(`เสียใจด้วย ${inputValue} ไม่ถูกรางวัลใดเลย`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-content h-fit flex flex-col items-center border border-gray-300 rounded-xl bg-white m-8 p-8">
        <p className="text-4xl font-bold mb-4">รางวัลล็อตเตอรี่ Diversition</p>
        <p className="text-2xl font-medium mb-8">
          ผลการออกรางวัลล็อตเตอรี่ Diversition
        </p>
        <button
          className="bg-yellow-500 text-white rounded-lg py-2 px-6 my-4 hover:bg-yellow-400 transition duration-300 ease-in-out"
          onClick={setNumbers}
        >
          สุ่มรางวัล
        </button>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg font-medium">รางวัลที่ 1</p>
          <p className="text-xl font-bold py-2">{num1 ? num1 : "xxx"}</p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg font-medium">รางวัลเลขข้างเคียงรางวัลที่ 1</p>
          <p className="text-xl py-2">
            {isNaN(nearestNumberLess) ? "xxx" : nearestNumberLess}
          </p>
          <p className="text-xl pb-2">
            {isNaN(nearestNumberMore) ? "xxx" : nearestNumberMore}
          </p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg font-medium">รางวัลที่ 2</p>
          <p className="text-xl py-2">{num2 ? num2 : "xxx"}</p>
          <p className="text-xl py-2">{num3 ? num3 : "xxx"}</p>
          <p className="text-xl py-2">{num4 ? num4 : "xxx"}</p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg font-medium">รางวัลเลขท้าย 2 ตัว</p>
          <p className="text-xl py-2">{num5 ? num5 : "xx"}</p>
        </div>
        <div className="flex flex-col mt-5">
          <p className="text-3xl font-medium">
            ตรวจรางวัลล็อตเตอรี่ Diversition
          </p>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="กรอกหมายเลข..."
            className="px-5 border-solid border-2 rounded border-gray py-1 my-5"
          />
          <p className="py-2 flex justify-center font-bold italic">
            {result ? result : "กรุณากรอกหมายเลขก่อนตรวจรางวัล"}
          </p>
          <button
            className="border-solid bg-yellow-500 text-white  rounded-2xl p-3 my-5 hover:bg-yellow-400"
            onClick={checkNumber}
            disabled={!inputValue}
          >
            ตรวจรางวัล
          </button>
        </div>
      </div>
    </div>
  );
}
