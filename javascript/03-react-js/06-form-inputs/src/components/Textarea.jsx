const Textarea = ({ label, id, handleChange, name, type, placeholder }) => {
  return (
    <div>
      <label className="block mb-1 text-white" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="px-4 py-1 w-full rounded outline-none"
        id={id}
        onChange={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Textarea;
