const Cards = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
Cards();
export default Cards;
