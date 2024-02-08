const FormInput = ({ label, id, handleChange, name, type }) => {
  return (
    <div>
      <label className="block mb-1 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-4 py-1 font-semibold w-full rounded outline-none"
        id={id}
        onChange={handleChange}
        name={name}
        type={type}
      />
    </div>
  );
};
export default FormInput;
