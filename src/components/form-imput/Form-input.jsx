import "./form-input.scss";

const FormInput = ({ label, ...ohterProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...ohterProps} />
      {label && (
        <label
          className={`${
            ohterProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
