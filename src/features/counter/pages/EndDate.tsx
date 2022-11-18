import session from "../../../configs/session";
import useSession from "../../../hooks/useSession";
import paths from "../../../routes/paths";

const EndDate = (): JSX.Element => {
  useSession(session.isEndDate(), paths.joinList);

  return (
    <section>
      <img
        src="img/santa-claus.png"
        alt="Goofy Santa Claus"
        width={300}
        height={650}
      />
    </section>
  );
};

export default EndDate;
