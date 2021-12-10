import CurrencyInput from "./inputCurrency";

export default function UserInteraction({ handleInputs, inputs }) {
  return (
    <>
      <CurrencyInput
          name="from"
          labelTitle="De:"
          onChange={handleInputs}
          value={inputs.from}
        />
        <CurrencyInput
          name="to"
          labelTitle="Para:"
          onChange={handleInputs}
          value={inputs.to}
        />
        <CurrencyInput
          name="value"
          label="Valor desejado:"
          input={ true }
          value={inputs.value}
          onChange={handleInputs}
        />
    </>
  );
}
