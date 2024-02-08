const FormInput = ({
  label,
  id,
  handleChange,
  name,
  type,
  placeholder,
  required
}) => {
  return (
    <div>
      <label className="block mb-1 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-4 py-1  w-full rounded outline-none"
        id={id}
        onChange={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        required = {required}
      />
    </div>
  );
};
export default FormInput;
