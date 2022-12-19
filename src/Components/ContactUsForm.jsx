export function ContactUsForm() {
  return (
    <div className="contact-us-form">
      {" "}
      <form>
        {" "}
        <div className="form-group pb-1">
          {" "}
          <label htmlFor="name"> Name </label>{" "}
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />{" "}
        </div>{" "}
        <div className="form-group py-1">
          {" "}
          <label htmlFor="email"> Email </label>{" "}
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />{" "}
        </div>{" "}
        <div className="form-group py-1">
          {" "}
          <label htmlFor="message"> Message </label>{" "}
          <textarea className="form-control" id="message" rows="3" />{" "}
        </div>{" "}
        <button type="submit" className="btn btn-dark mt-3 w-100">
          {" "}
          Send{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}
