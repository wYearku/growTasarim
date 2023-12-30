const Snow = ({ id, style }) => {
  return (
    <p className="Snowflake" id={`item${id}`} style={style}>
      *
    </p>
  );
};

export default Snow;
