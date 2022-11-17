import "./Errors.scss";

type ErrorsProps = {
  errors?: string[];
};

const Errors = ({ errors }: ErrorsProps) => (
  <>
    {errors && (
      <div className="errors">
        <ul className="errors__list">
          {errors.map((error) => (
            <li className="errors__message" key={error}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

export default Errors;
